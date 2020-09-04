const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 5, 80 ],
    [ 7, 216 ],
    [ 20, 114624 ],
    [ 30, 14098308 ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(perimeter(input), expected);
        });
    }

});
