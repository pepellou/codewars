let facts = [ 1, 1 ];

const fact = n => {
    while (n >= facts.length) {
        facts.push(facts.length * facts[facts.length - 1]);
    }
    return facts[n];
}

const over = (a, b) => {
    let p = 1;
    for (let i = a, j = 0; j < b; i--, j++) {
        p *= i;
    }
    return Math.round(p / fact(b));
}

const choose = (a, b) =>
    a < b
    ? 0
    : (
        b < a - b
        ? over(a, b)
        : over(a, a - b)
    );
