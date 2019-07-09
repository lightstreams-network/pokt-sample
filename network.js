/**
 * User: ggarrido
 * Date: 9/07/19 10:20
 * Copyright 2019 (c) Lightstreams, Granada
 */

const PocketEth = require('pocket-js-eth').PocketEth;
const {
  maxNodes,
  requestTimeOut,
  TestnetNetId,
  MainnetNetId,
} = require('./const');

var pocketEth = new PocketEth(process.env.DEVID, [TestnetNetId, MainnetNetId], maxNodes, requestTimeOut);

module.exports.Testnet = () => {
  return pocketEth.network(TestnetNetId);
};

module.exports.Mainnet = () => {
  return pocketEth.network(MainnetNetId);
};
