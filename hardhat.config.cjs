require("@nomiclabs/hardhat-ethers")
 
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    fuji: {
      url: "https://sparkling-silent-cherry.avalanche-testnet.quiknode.pro/b3cfc7b91f7bc90d497a2c8fef85dbd7df506553/ext/bc/C/rpc/",
      accounts: ["0x829cd220b2c2eeda5fbba027aa9f8de6f3faf53e101175b297d1683d6c687447"],
      chainId: 43113,
    },
  },
}