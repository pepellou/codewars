function smaller(a) {
    return a.map(
        (e, i) => a.slice(i+1).reduce((c,x)=>x<e?c+1:c,0)
    );
}
