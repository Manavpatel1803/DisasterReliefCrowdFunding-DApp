require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
  etherscan: {
    apiKey:"Q1GBU177EJMHTK1C114FUT5B911JQQUWGW",
  },
};