/**
 * User: ggarrido
 * Date: 9/07/19 10:03
 * Copyright 2019 (c) Lightstreams, Granada
 */

require('dotenv').config();

const { Testnet } = require('./src/network');
const poktEthApi = require('./src/api');
const poktNode = Testnet();
const addr = "0x5d995307577557f4d1b7be246056da268f238c9b";

poktEthApi.getBalance(poktNode, addr)
  .then(balance => {
    console.log(`Balance of ${addr} is ${balance} PHT`);
  }).catch(err => {
    console.error(err);
  });