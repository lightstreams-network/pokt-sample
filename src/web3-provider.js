const PocketWeb3Provider = require('@pokt-network/pocket-js').PocketJSWeb3Provider;
const {
    requestTimeOut,
    maxNodes,
    TestnetNetId,
    LightchainTicker
} = require('./const');

console.log(LightchainTicker);
console.log(TestnetNetId);
console.log(process.env.DEVID);

var testnetProvider = new PocketWeb3Provider(LightchainTicker, TestnetNetId, process.env.DEVID, {
    // TODO implement transaction signer
    transactionSigner: {
        hasAddress: async function (address) {
            // Returns true or false if the TransactionSigner can sign transactions on behalf of address
            return false;
        },
        signTransaction: async function (txParams) {
            //returns transaction hex based on txParams
            return "0x";
        }
    },
    maxNodes: maxNodes,
    timeout: requestTimeOut
});

module.exports.TestnetProvider = testnetProvider;