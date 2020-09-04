var fibs = [1, 1];
let f = _ => _ < fibs.length ? fibs[_] : ((fibs[_] = f(_-1)+f(_-2)) && fibs[_]);
let perimeter = _ => 4 * (f(_+2) - 1);
