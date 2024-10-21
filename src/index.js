// src/index.js
const _ = require("lodash");

function getLastElement(array) {
  return _.last(array);
}

module.exports = getLastElement;