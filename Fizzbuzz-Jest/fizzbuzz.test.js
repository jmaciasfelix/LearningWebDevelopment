const fizzbuzz = require("./fizzbuzz");

describe("Test Suites FizzBuzz", () => {
  it("should return one if receive one", () => {
    const expected = 1;
    const result = fizzbuzz(1);

    expect(result).toBe(expected);
  });

  it("should return fizz if receive three", () => {
    const expected = "fizz";
    const result = fizzbuzz(3);

    expect(result).toBe(expected);
  });

  it("should return buzz if receive five", () => {
    const expected = "buzz";
    const result = fizzbuzz(5);

    expect(result).toBe(expected);
  });

  it("should return fizzbuzz if receive fifteen", () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);

    expect(result).toBe(expected);
  });

  it("should return fizz if receive any number divisible for three", () => {
    const expected = "fizz";
    const result = fizzbuzz(9);

    expect(result).toBe(expected);
  });

  it("should not return buzz or fizzbuzz if receive any number divisible for three", () => {
    const expected = ["buzz", "fizzbuzz"];
    const result = fizzbuzz(9);

    expect(result).not.toBe(expected[0]);
    expect(result).not.toBe(expected[1]);
  });

  it("should return buzz if receive any number divisible for five", () => {
    const expected = "buzz";
    const result = fizzbuzz(35);

    expect(result).toBe(expected);
  });

  it("should return the same number that receive", () => {
    const expected = 4;
    const result = fizzbuzz(4);

    expect(result).toBe(expected);
  });
});
