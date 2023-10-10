const error = (text) => {
  console.log(new Date(), `[ERROR] ${text}`);
};

const info = (text) => {
  console.log(new Date(), `[INFO] ${text}`);
};

// module.exports = error
module.exports = {
  error,
  info,
};
