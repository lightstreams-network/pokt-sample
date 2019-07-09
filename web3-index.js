require('dotenv').config();

console.log(process.env.DEVID)

const {
    TestnetProvider
} = require('./src/web3-provider');
const Web3 = require('web3');
const addr = "0x5d995307577557f4d1b7be246056da268f238c9b";
const web3Instance = new Web3(TestnetProvider);

web3Instance.eth.getBalance(addr).then(console.log)

