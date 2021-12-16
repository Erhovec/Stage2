/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/**
 *
 *A simple class containing methods for calculating
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {}
  /**
   * @param {Number} el1 number that is adding
   * @param {Number} el2 number that is adding
   * @return {Number} result number
   * @memberof Calculator
   */
  add(el1, el2) {
    const typeOfVariable1 = typeof el1;
    const typeOfVariable2 = typeof el2;
    if (typeOfVariable1 === "number" && typeOfVariable2 === "number") {
      return el1 + el2;
    } else {
      throw new Error("Variable should be a number!");
    }
  }
  /**
   * @param {Number} el1 number that is multiplying
   * @param {Number} el2 number that is multiplying
   * @return {Number} result number
   * @memberof Calculator
   */
  multiply(el1, el2) {
    const typeOfVariable1 = typeof el1;
    const typeOfVariable2 = typeof el2;
    if (typeOfVariable1 === "number" && typeOfVariable2 === "number") {
      return el1 * el2;
    } else {
      throw new Error("Variable should be a number!");
    }
  }
}

module.exports = Calculator;
