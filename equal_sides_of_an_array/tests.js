const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
    it("works", function() {
        assert.strictEqual(findEvenIndex([1,2,3,4,3,2,1]), 3);
        assert.strictEqual(findEvenIndex([1,100,50,-51,1,1]), 1);
        assert.strictEqual(findEvenIndex([1,2,3,4,5,6]), -1);
        assert.strictEqual(findEvenIndex([20,10,30,10,10,15,35]), 3);
        assert.strictEqual(findEvenIndex([20,10,-80,10,10,15,35]), 0);

    });
});
