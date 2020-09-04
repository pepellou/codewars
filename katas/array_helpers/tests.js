const chai = require("chai");
const assert = chai.assert;

const numbers = [1, 2, 3, 4, 5];

describe("Tests", function() {

    it("square()", function() {
        assert.deepEqual(numbers.square(), [1, 4, 9, 16, 25]);
    });

    it("cube()", function() {
        assert.deepEqual(numbers.cube(), [1, 8, 27, 64, 125]);
    });

    it("sum()", function() {
        assert.strictEqual(numbers.sum(), 15);
    });

    it("average()", function() {
        assert.strictEqual(numbers.average(), 3);
    });

    it("even()", function() {
        assert.deepEqual(numbers.even(), [2, 4]);
    });

    it("odd()", function() {
        assert.deepEqual(numbers.odd(), [1, 3, 5]);
    });

});
