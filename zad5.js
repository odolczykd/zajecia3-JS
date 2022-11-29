function fibonacci(n){
    if(n==0) return [];
    if(n==1) return [0];
    if(n==2) return [0,1];

    let fib = [0,1];
    for(let i=3; i<=n; i++){
        let len = fib.length;
        fib.push(fib.at(len-1) + fib.at(len-2));
    }

    return fib;
}

console.log(fibonacci(9));