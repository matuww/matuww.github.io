'use strict';

var calls = [];

exports.Array = {
  before: function () {
    calls.push('before');
  },

  after: function () {
    calls.push('after');
    expect(calls, 'to equal', [
      'before',
      'before each',
      'one',
      'after each',
      'before each',
      'two',
      'after each',
      'after'
    ]);
  },

  '#indexOf()': {
    beforeEach: function () {
      calls.push('before each');
    },

    afterEach: function () {
      calls.push('after each');
    },

    'should return -1 when the value is not present': function () {
      calls.push('one');
      expect([1, 2, 3].indexOf(5), 'to be', -1);
      expect([1, 2, 3].indexOf(0), 'to be', -1);
    },

    'should return the correct index when the value is present': function () {
      calls.push('two');
      expect([1, 2, 3].indexOf(1), 'to be', 0);
      expect([1, 2, 3].indexOf(2), 'to be', 1);
      expect([1, 2, 3].indexOf(3), 'to be', 2);
    }
  }
};
