const sum = matrix => matrix.map(
    (row, i) => row[i] + row[matrix.length - i - 1]
).reduce((s,e) => s+e, 0);
