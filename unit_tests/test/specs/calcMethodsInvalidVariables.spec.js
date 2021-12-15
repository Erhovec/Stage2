/* eslint-disable linebreak-style */
const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("Calculator", function () {
  let operation = new Calculator();

  it("Should throw an error if not a number argument was passed to add method", function () {
    let isErrorMessageAppeared = () => operation.add(5, "ht");
    expect(isErrorMessageAppeared).to.throw("Variable should be a number!");
  });
  it("Should throw an error if not a number argument was passed to multiply method", function () {
    let isErrorMessageAppeared = () => operation.multiply("letter", 10);
    expect(isErrorMessageAppeared).to.throw("Variable should be a number!");
  });
});
