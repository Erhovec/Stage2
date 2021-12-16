/* eslint-disable linebreak-style */
const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("Calculator", function () {
  let operation = new Calculator();

  it("should return 7 when add 2 to 5", function () {
    expect(operation.add(2, 5)).to.be.equal(7);
  });

  it("should return 100 when multiply 25 by 4", function () {
    expect(operation.multiply(25, 4)).to.be.equal(100);
  });
});
