const isOdd = require("is-odd"); // commonJS
// import isOdd from 'is-odd' // modules ECMASCript

// const logger = require("./logger");

// logger.info("test");

const { info } = require("./logger");
info("test");

// console.log(isOdd("1")); //=> true
// console.log(isOdd("3")); //=> true

// console.log(isOdd(0)); //=> false
// console.log(isOdd(2)); //=> false
