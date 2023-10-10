export const error = (text) => {
  console.log(new Date(), `[ERROR] ${text}`);
};

export const info = (text) => {
  console.log(new Date(), `[INFO] ${text}`);
};
