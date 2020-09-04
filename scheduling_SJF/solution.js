let SJF=(j,i)=>j[i]+j.filter(($,_)=>$<j[i]||$==j[i]&&_<i).reduce((s,n)=>s+n,0);
