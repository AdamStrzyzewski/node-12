import jwt from "jsonwebtoken";

// const payload = {
//   id: "kofsjiogfj234r23",
//   username: "John",
// };

const secret = "L1R6dxgBJnK60TJJfn7JDOtWklYBNo63uxbC+S2ZhMA="; // 256 bitowy

// const token = jwt.sign(payload, secret, { expiresIn: "12h" });

// console.log(token);

const originalToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtvZnNqaW9nZmoyMzRyMjMiLCJ1c2VybmFtZSI6IkpvaG4iLCJpYXQiOjE2OTg3NzYyMzQsImV4cCI6MTY5ODgxOTQzNH0.tqZ63XjGK-h8PR7UAc7oRYVc0GqxIzr-Msbpeb4hLD0";

const forgedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtvZnNqaW9nZmoyMzRyMjMiLCJhZG1pbiI6dHJ1ZSwidXNlcm5hbWUiOiJKb2huIiwiaWF0IjoxNjk4Nzc2MjM0LCJleHAiOjE2OTg4MTk0MzR9.JhQLOY1UDPyLTdpIa6nRPFZ9MgVE_pWhqWsVtBJA3dA";

const thirdToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtvZnNqaW9nZmoyMzRyMjMiLCJhZG1pbiI6dHJ1ZSwidXNlcm5hbWUiOiJKb2huIiwiaWF0IjoxNjk4Nzc2MjM0LCJleHAiOjE2OTg4MTk0MzR9._V6ayzL5o4lyWdU1qwSWUJXFC7pRU11W_R7isRlzEJo";

try {
  //   const verify = jwt.verify(originalToken, secret);
  //   const verify = jwt.verify(forgedToken, secret);
  const verify = jwt.verify(thirdToken, secret);
  console.log(verify);
} catch (e) {
  console.log(e);
}
