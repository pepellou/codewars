var jumps = from =>
  ( (allSquares, canGo) =>
    allSquares.filter(square => canGo(from, square))
  )
  (
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
      .map(column => [1, 2, 3, 4, 5, 6, 7, 8]
        .map(row => column + row)
      ).join().split(','),

    (from, to) =>
      ((f0, f1, t0, t1) =>
        from != to && (
          (Math.abs(f0 - t0) == 2 && Math.abs(f1 - t1) == 1)
          || (Math.abs(f0 - t0) == 1 && Math.abs(f1 - t1) == 2)
        )
      )
      (
        from.charCodeAt(0),
        from.charCodeAt(1),
        to.charCodeAt(0),
        to.charCodeAt(1)
      )
  )
;


var explore = (current, target, explored) =>
  (current.includes(target))
    ? 0
    : 1 + explore(
      [...new Set(
        current.map(square => jumps(square)).join().split(',')
      )],
      target,
      explored.concat(current)
    );

const knight = (start, finish) => explore([start], finish, []);
