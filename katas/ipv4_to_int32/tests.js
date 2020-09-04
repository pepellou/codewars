const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {

    it("works", function() {
        assert.strictEqual(ipToInt32("128.32.10.1"), 2149583361);
    });

});
