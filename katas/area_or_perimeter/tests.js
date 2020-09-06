const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 1 , 1 , 1 ],
    [ 1 , 2 , 6 ],
    [ 1 , 3 , 8 ],
    [ 3 , 3 , 9 ],
    [ 4 , 4 , 16 ],
    [ 3 , 4 , 14 ],
    [ 6 , 10 , 32 ],
];

describe("Tests", function() {

    for (const [a, b, expected] of tests) {
        it(`input: ${a}, ${b}`, function() {
            assert.strictEqual(areaOrPerimeter(a, b), expected);
        });
    }

});
