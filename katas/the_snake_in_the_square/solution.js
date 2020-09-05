const getSideOfSquare = function(size) {
    let side = 1, max = 1, i1 = 2, i2 = 4, odd = true;

    while (max < size) {
        side++;
        if (odd) {
            max += i1++;
        } else {
            max += i2;
            i2 += 3;
        }
        odd = !odd;
    }

    return side;
}

const distribution = function(size) {
    const side = getSideOfSquare(size);
    let sensors = [];
    for (let i = 0; i < side; i++) {
        sensors[i] = [];
        for (let j = 0; j < side; j++) {
            sensors[i][j] = 0;
        }
    }

    let x = 0,
        y = 0,
        d = 'DOWN';
    while (size > 0) {
        sensors[y][x] = 1;
        size--;

        if (d == 'DOWN') {
            y++;
            if (y == side - 1) {
                d = 'RIGHT1';
            }
        } else if (d == 'UP') {
            y--;
            if (y == 0) {
                d = 'RIGHT1';
            }
        } else if (d == 'RIGHT1') {
            x++;
            d = 'RIGHT2';
        } else if (d == 'RIGHT2') {
            x++;
            d = (y == 0) ? 'DOWN' : 'UP';
        }
    }

    return sensors;
}
