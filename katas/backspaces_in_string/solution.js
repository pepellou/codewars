const cleanString = s => s.split('').reduce(
    (r, c) => (c == '#') ? r.substr(0, r.length - 1) : r + c,
    ''
)
