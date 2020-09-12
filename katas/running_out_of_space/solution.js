const spacey = words =>
    words
        .map(_ => _.replace(/ /g,''))
        .map((_,i,$) => $.slice(0, i + 1).join(''));
