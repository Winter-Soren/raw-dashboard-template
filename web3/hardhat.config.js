require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require('fs');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    polygon: {
      url: 'https://rpc-amoy.polygon.technology',
      chainId: 80002,
      accounts: [process.env.METAMASK_PRIVATE_KEY]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

