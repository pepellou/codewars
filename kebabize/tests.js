const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 'myCamelCasedString', 'my-camel-cased-string' ],
    [ 'myCamelHas3Humps', 'my-camel-has-humps' ],
];

describe("Tests", function() {
    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(kebabize(input), expected);
        });
    }
});
