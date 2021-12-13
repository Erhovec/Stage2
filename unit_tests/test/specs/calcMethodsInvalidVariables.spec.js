/* eslint-disable linebreak-style */
const Calculator = require('../../app/calculator.js');
const {assert} = require('chai');

describe('calcMethodsInvalidVariables', function() {
  let operation;
  beforeEach(() => {
    operation = new Calculator();
  });

  afterEach(() => {
    operation = null;
  });

  it('Variable is not a number', function() {
    assert(isNaN(operation.add('na', 10)));
  });
  it('Variable is not a number', function() {
    assert(isNaN(operation.multiply(10, 'ghj')));
  });
});
