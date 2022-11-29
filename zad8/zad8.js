function isAnagram(t1, t2){
    const letters1 = t1.split('').sort().join();
    const letters2 = t2.split('').sort().join();
    return letters1 === letters2;
}

console.log(isAnagram("burza","arbuz"));
console.log(isAnagram("burza","arbiz"));
console.log(isAnagram("burza","adveg"));
console.log(isAnagram("burza","advesg"));