function palindrom(t){
    let left = 0;
    let right = t.length-1;

    while(left<right){
        if(t.at(left) !== t.at(right)) return false;
        left++;
        right--;
    }

    return true;
}

console.log(palindrom("kajak"));
console.log(palindrom("anna"));
console.log(palindrom("barak"));