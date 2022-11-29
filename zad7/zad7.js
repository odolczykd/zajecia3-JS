function isHappyNumber(n){
    let seenNumbers = new Set();

    while(true){
        let digits = n.toString().split('');
        n = 0;
        digits.forEach(e => {n += e*e;});
        if(n === 1) return true;
        if(seenNumbers.has(n)) return false;
        seenNumbers.add(n);
    }
}

console.log(isHappyNumber(20));