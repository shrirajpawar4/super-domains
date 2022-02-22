const main = async() => {
    const domainContractFactory = await hre.ethers.getContractFactory("Domains");
    const domainContract = await domainContractFactory.deploy();
    await domainContract.deployed();
    console.log("Contract deployed to: ", domainContract.address);

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