/**
 * User: ggarrido
 * Date: 9/07/19 10:30
 * Copyright 2019 (c) Lightstreams, Granada
 */


module.exports.getBalance = async (ethNode, address) => {
  const resp = await ethNode.eth.getBalance(address);
  if (resp.__proto__.name === 'Error') {
    throw resp;
  }
  return resp;
};