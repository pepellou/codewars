const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ "code*s",       "codewars", true  ],
    [ "codewar*s",    "codewars", true  ],
    [ "code*warrior", "codewars", false ],
    [ "c",            "c",        true  ],
    [ "*s",           "codewars", true  ],
    [ "*s",           "s",        true  ],
    [ "s*",           "s",        true  ],
    [ "aa",           "aaa",      false ],
    [ "aa*",          "aaa",      true  ],
    [ "aaa",          "aa",       false ],
    [ "aaa*",         "aa",       false ],
    [ "*",            "codewars", true  ]
];

describe("Tests", function() {

    for (const [a, b, expected] of tests) {
        it(`input: ${a}, ${b}`, function() {
            assert.strictEqual(solve(a, b), expected);
        });
    }

});
