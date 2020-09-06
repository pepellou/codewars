const splitByValue = (k, e) => e.filter(x => x < k).concat(e.filter(x => x >= k));
