function fibonachiN(a, b) {
    let fibonachiLength = a;
    let kElement = b;
    let result = [1, 1];
    
    for (let i = 2; i <= fibonachiLength; i++) {
        let lastElement = result.slice(Math.max(result.length - kElement, 1));
        let sum = 0;

        for (let j = 0; j < lastElement.length; j++) {
            sum += lastElement[j];
        }
        
        result.push(sum)
    }
    result = result.slice(1);

    for (const element of result) {
        console.log(element);
    }
    
    function add(a, b) {
        return a + b;
    }
}

fibonachiN(6, 3)