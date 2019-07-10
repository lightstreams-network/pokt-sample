/**
 * User: ggarrido
 * Date: 9/07/19 10:03
 * Copyright 2019 (c) Lightstreams, Granada
 */

require('dotenv').config();

const { Testnet, Mainnet } = require('./src/network');
const poktEthApi = require('./src/api');
const web3pketMainnet = Mainnet(process.env.DEVID);
const web3pketTestnet = Testnet(process.env.DEVID);
const addr = "0x5d995307577557f4d1b7be246056da268f238c9b";

poktEthApi.getBalance(web3pketTestnet, addr)
  .then(balance => {
    console.log(`TestNet: Balance of ${addr} is ${balance} PHT`);
  }).catch(err => {
    console.error(err);
  });

poktEthApi.getBalance(web3pketMainnet, addr)
  .then(balance => {
    console.log(`MainNet: Balance of ${addr} is ${balance} PHT`);
  }).catch(err => {
      console.error(err);
  });