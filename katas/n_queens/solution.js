function nQueen(N) {
    if (N == 1) {
        return [ 0 ];
    }
    if (N < 4) {
        return [];
    }

    let left = [],
        right = [];

    for (let i = 0; i < N; i++) {
        if (i % 2 == 0) {
            right.push(i);
        } else {
            left.push(i);
        }
    }

    if (N % 6 == 2) {
        const it_1 = right.shift();
        const it_2 = right.shift();
        const it_3 = right.shift();
        right.unshift(it_1);
        right.unshift(it_2);
        right.push(it_3);
    }

    if (N % 6 == 3) {
        const it_1 = left.shift();
        const it_2 = right.shift();
        const it_3 = right.shift();
        left.push(it_1);
        right.push(it_2);
        right.push(it_3);
    }

    return left.concat(right);
}
