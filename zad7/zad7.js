function isHappyNumber(n){
    let seenNumbers = new Set();
    let sum = 0;

    while(true){
        let digits = n.toString().split('');
        sum = 0;
        digits.forEach(e => {sum += e*e;});
        if(sum === 1) return true;
        if(seenNumbers.has(sum)) return false;
        seenNumbers.add(sum);
        n = sum;
    }
}

console.log(isHappyNumber(19));