const safeDivide = require("./safeDivide");

// import safeDivide from './safeDivide.js'

describe("safeDivide", () => {
  // hooks
  beforeAll(() => {
    console.log("before all tests in suite");
  });

  afterAll(() => {
    console.log("after all test is suite");
  });

  beforeEach(() => {
    console.log("before each test");
  });

  afterEach(() => {
    console.log("after each test");
  });

  test("1/5 to be 0.2", () => {
    expect(safeDivide(1, 5)).toBe(0.2);
  });

  test("1/0 to be 0", () => {
    expect(safeDivide(1, 0)).toBe(0);
  });

  test("'a' / 10 to throw", () => {
    expect(() => safeDivide("a", 10)).toThrow("NOT_A_NUMBER");
    // expect(safeDivide("a", 10)).toThrow("NOT_A_NUMBER"); // doesnt work
  });
});
