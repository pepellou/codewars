const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 1, 0 ],
    [ 9, 1 ],
    [ 40, 4 ],
    [ 98, 18 ],
    [ 99, 20 ],
    [ 100, 20 ],
    [ 920, 203 ],
    [ 565754, 275645 ],
    [ 10000000000, 10000000000 ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(number9(input), expected);
        });
    }

});
