'use strict';

const calculator = {};

calculator.pythagoras = (adjacent, opposite) => {
  if (adjacent === undefined) {
    throw new Error('Adjacent are missing.');
  }

  return Math.sqrt((adjacent ** 2) + (opposite ** 2));
};

calculator.add = (...numbers) => {
  if (!numbers || numbers.length === 0) {
    throw new Error('Numbers are missing.');
  }

  return numbers.reduce((sum, number) => sum + number);
};

calculator.sub = (minuend, subtrahend) => {
  if (minuend === undefined && subtrahend === undefined) {
    throw new Error('Numbers are missing.');
  }

  return minuend - subtrahend;
};

module.exports = calculator;
