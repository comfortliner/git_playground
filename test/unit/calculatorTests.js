'use strict';

const { assert } = require('assertthat');

const calculator = require('../../lib/calculator');

suite('calculator', () => {
  suite('add', () => {
    test('returns the sum of the given numbers.', done => {
      const actual = calculator.add(23, 42),
            expected = 65;

      assert.that(actual).is.equalTo(expected);
      done();
    });

    test('throws an error if numbers are missing.', done => {
      assert.that(() => {
        calculator.add();
      }).is.throwing('Numbers are missing.');
      done();
    });
  });

  suite('sub', () => {
    test('return the substraction of the given number.', done => {
      const actual = calculator.sub(27, 13),
            expected = 14;

      assert.that(actual).is.equalTo(expected);
      done();
    });

    test('throws an error if numbers are missing.', done => {
      assert.that(() => {
        calculator.sub();
      }).is.throwing('Numbers are missing.');
      done();
    });
  });
});
