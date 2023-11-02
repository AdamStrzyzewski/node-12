const bcrypt = require("bcrypt");

const pass = "password";

const main = async () => {
  const salt1 = await bcrypt.genSalt(12);
  const salt2 = await bcrypt.genSalt(12);
  console.log("salt1: ", salt1);
  console.log("salt2: ", salt2);
  const hash1 = await bcrypt.hash(pass, salt1);
  const hash2 = await bcrypt.hash(pass, salt2);
  const hash3 = await bcrypt.hash(pass, salt2);
  console.log(hash1);
  console.log(hash2);
  console.log(hash3);

  await verify(pass, hash3);
  await verify("innymhaslem", hash3);
};

const verify = async (pass, hash) => {
  const pulledSalt = hash.slice(0, 29);
  console.log("pulledSalt: ", pulledSalt);
  const hashCompare = await bcrypt.hash(pass, pulledSalt);
  console.log(`${pass} -> hash === hashCompare: `, hash === hashCompare);
};

main();
