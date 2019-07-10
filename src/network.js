/**
 * User: ggarrido
 * Date: 9/07/19 10:20
 * Copyright 2019 (c) Lightstreams, Granada
 */

const PocketWeb3Provider = require('@pokt-network/pocket-js').PocketJSWeb3Provider;
const Web3 = require('web3');

// TODO implement transaction signer
const transactionSigner = {
  hasAddress: async function(address) {
    // Returns true or false if the TransactionSigner can sign transactions on behalf of address
    return false;
  }
,
  signTransaction: async function(txParams) {
    //returns transaction hex based on txParams
    return "0x";
  }
};

const mainnetCfg = {
  netId: "163",
  netName: "PHT",
  opts: {
    transactionSigner,
    maxNodes: 2,
    timeout: 1000
  }
};

const testnetCfg = {
  netId: "162",
  netName: "PHT",
  opts: {
    maxNodes: 2,
    transactionSigner,
    timeout: 1000
  }
};
module.exports.Testnet = (DEVID) => {
  console.log(DEVID);
  var provider = new PocketWeb3Provider(testnetCfg.netName, testnetCfg.netId, DEVID, testnetCfg.opts);
  return new Web3(provider);
};

module.exports.Mainnet = (DEVID) => {
  console.log(DEVID);
  var provider = new PocketWeb3Provider(mainnetCfg.netName, mainnetCfg.netId, DEVID, mainnetCfg.opts);
  return new Web3(provider)
};
