const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {

    it("works", function() {
        assert.strictEqual(findChildren("beeeEBb"), "BbbEeee");
        assert.strictEqual(findChildren("uwwWUueEe"), "EeeUuuWww");
    });

});
