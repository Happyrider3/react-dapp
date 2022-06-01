require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      //chainId: 1337
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/52d79b13b9b64bf68a88d4b74707070d",
      accounts: [`0x1b50e9c54f7d311fb3747da6893155998f1e9d1e92a026d5f69ed7f83cb301b2`]
    }
  },
  solidity: "0.8.4",
};