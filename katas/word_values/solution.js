function wordValue(a) {
    return a.map(
        (s, i) => (i + 1) * s.replace(/ /g, '').split('').reduce(
            (s, c) => s += (1 + c.charCodeAt(0) - 'a'.charCodeAt(0)),
            0
        )
    );
}
