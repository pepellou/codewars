const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {

    it(`Math.round`, function() {
        assert.strictEqual(Math.round(0), 0);
        assert.strictEqual(Math.round(5), 5);
        assert.strictEqual(Math.round(0.4), 0);
        assert.strictEqual(Math.round(0.5), 1);
        assert.strictEqual(Math.round(0.9), 1);
        assert.strictEqual(Math.round(1.1), 1);
        assert.strictEqual(Math.round(1000.5), 1001);
    });

    it(`Math.round`, function() {
        assert.strictEqual(Math.ceil(0), 0);
        assert.strictEqual(Math.ceil(5), 5);
        assert.strictEqual(Math.ceil(0.4), 1);
        assert.strictEqual(Math.ceil(0.5), 1);
        assert.strictEqual(Math.ceil(1.4), 2);
        assert.strictEqual(Math.ceil(2.5), 3);
        assert.strictEqual(Math.ceil(3.6), 4);
    });

    it(`Math.floor`, function() {
        assert.strictEqual(Math.floor(0), 0);
        assert.strictEqual(Math.floor(5), 5);
        assert.strictEqual(Math.floor(0.4), 0);
        assert.strictEqual(Math.floor(0.5), 0);
        assert.strictEqual(Math.floor(1.4), 1);
        assert.strictEqual(Math.floor(2.5), 2);
        assert.strictEqual(Math.floor(3.6), 3);
    });

});
