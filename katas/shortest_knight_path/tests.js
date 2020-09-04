const chai = require("chai");
const assert = chai.assert;

const tests = [
  ['a3', 'a3', 0],
  ['a3', 'b5', 1],
  ['a1', 'c1', 2],
  ['a1', 'f1', 3],
  ['a1', 'f3', 3],
  ['a1', 'f4', 4],
  ['a1', 'f7', 5]
];

describe("Tests", function() {

    it(`jumps`, function() {
      assert.deepEqual(jumps('a1'), ['b3', 'c2'] );
      assert.deepEqual(jumps('b1'), ['a3', 'c3', 'd2'] );
      assert.deepEqual(jumps('a3'), ['b1', 'b5', 'c2', 'c4'] );
      assert.deepEqual(jumps('a3'), ['b1', 'b5', 'c2', 'c4'] );
      assert.deepEqual(jumps('g3'), ['e2', 'e4', 'f1', 'f5', 'h1', 'h5'] );
      assert.deepEqual(jumps('e4'), ['c3', 'c5', 'd2', 'd6', 'f2', 'f6', 'g3', 'g5'] );
    });

    for (const [p1, p2, expected] of tests) {
        it(`input: ${p1}, ${p2}`, function() {
            assert.strictEqual(knight(p1, p2), expected);
        });
    }

});
