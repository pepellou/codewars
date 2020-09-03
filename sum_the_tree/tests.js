const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {

    it("Sums up all children", function() {
        var simpleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}};
        assert.strictEqual(sumTheTreeValues(simpleNode), 13);
    });

    it("Handles unbalanced trees", function() {
        var unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
        assert.strictEqual(sumTheTreeValues(unbalancedNode), 12);
    });

});



