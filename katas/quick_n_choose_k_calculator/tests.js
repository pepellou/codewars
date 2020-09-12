const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 1, 1, 1 ],
    [ 5, 4, 5 ],
    [ 5, 5, 1 ],
    [ 5, 1, 5 ],
    [ 10, 5, 252 ],
    [ 10, 20, 0 ],
    [ 52, 5, 2598960 ],
];

describe("Tests", function() {

    for (const [a, b, expected] of tests) {
        it(`input: ${a}, ${b}`, function() {
            assert.strictEqual(choose(a, b), expected);
        });
    }

});
