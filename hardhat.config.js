require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
const SEPOLIA_KEY = process.env.SEPOLIA_KEY

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_KEY],
    },
    //     bitfinity: {
    //       url: 'https://testnet.bitfinity.network',
    //       accounts: [''],
    //       chainId: 355113,
    //     },
  },
  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
