// const isOdd = require("is-odd"); // commonJS
import isOdd from "is-odd"; // modules ECMASCript

console.log(isOdd("1")); //=> true
console.log(isOdd("3")); //=> true

// console.log(isOdd(0)); //=> false
// console.log(isOdd(2)); //=> false

import { info } from "./logger.js";

info("test");

// const { info } = require("./logger");
// info("test");
