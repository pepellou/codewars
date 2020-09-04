const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {

    it("works", function() {
        assert.strictEqual(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin");
        assert.strictEqual(rank("Lagon,Lily", [1, 5], 2), "Lagon");
        assert.strictEqual(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants");
        assert.strictEqual(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants");
        assert.strictEqual(rank("Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [ 1, 3, 5, 5, 3, 6 ], 2), "Matthew");
        assert.strictEqual(rank("Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth", [ 3, 1, 4, 4, 3, 2 ], 4), "Abigail");
    });

});
