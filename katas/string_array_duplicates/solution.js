const dup = input => input.map(
    str => str.split('').filter((c,i,a)=>c!=a[i-1]).join('')
)
