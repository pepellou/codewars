const evenChars = str =>
    (str.length < 2 || str.length > 100)
        ? 'invalid string'
        : str.split('').filter((c,i)=>i%2==1);
