const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ [ [1,2,3], [4,5,6], [7,8,9] ], 30 ],
    [ [ [10,2,3], [4,6,6], [7,8,9] ], 41 ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(sum(input), expected);
        });
    }

});
