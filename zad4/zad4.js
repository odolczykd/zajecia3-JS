function sum(array){
    let arraySum = 0;
    array.forEach(e => {
        arraySum += Number(e);
    })
    return arraySum;
}

console.log(sum([3,7,5]));