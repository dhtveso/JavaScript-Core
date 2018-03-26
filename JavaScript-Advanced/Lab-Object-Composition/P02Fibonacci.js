function fibonachi(size) {
    let first = 0;
    let second = 1;
    return function () {
        let next = first + second;
        first = second;
        second = next;
        console.log(first)
    }
    first = 5;
}

let fib = fibonachi();
fib();
fib();
fib();
fib();
fib();
fib();

