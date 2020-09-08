const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ [1,1], [1,1], 0 ],
    [ [5,4], [3,2], 4 ],
    [ [1,1], [0,3], 3 ],
];

describe("Tests", function() {

    for (const [p1, p2, expected] of tests) {
        it(`input: ${p1}, ${p2}`, function() {
            assert.strictEqual(manhattanDistance(p1, p2), expected);
        });
    }

});
