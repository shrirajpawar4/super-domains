const main = async() => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory("Domains");
    const domainContract = await domainContractFactory.deploy();
    await domainContract.deployed();
    console.log("Contract deployed to: ", domainContract.address);
    console.log("Contract deployed by: ", owner.address);

    const txn = await domainContract.register("doom");
    txn.wait();

    const domainOwner = await domainContract.getAddress("doom");
    console.log("Domain owned by: ", domainOwner);

    txn = await domainContract.connect(randomPerson).setRecord("doom", "It's my domain");
    await txn.wait();

}

const runMain = async() => {
  try {
      await main();
      process.exit(0);
  } catch (err){
      console.log(err);
      process.exit(1);
  }
};

runMain();

// 0x5FbDB2315678afecb367f032d93F642f64180aa3