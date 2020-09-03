const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ "aaaabb",      [ "a", 4 ] ],
    [ "bbbaaabaaaa", [ "a", 4 ] ],
    [ "cbdeuuu900",  [ "u", 3 ] ],
    [ "abbbbb",      [ "b", 5 ] ],
    [ "aabb",        [ "a", 2 ] ],
    [ "",            [ "",  0 ] ],
    [ "ba",          [ "b", 1 ] ],
];

describe("Tests", function() {
  for (const [input, expected] of tests) {
    it(`input: ${input}`, function() {
      assert.deepEqual(longestRepetition(input), expected);
    });
  }
});
