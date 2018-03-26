function triangleOfStars(triangleSize) {
    let result = '';
    for (let i = 1; i <= (triangleSize * 2) - 1; i++) {
        if (triangleSize >= i) {
            result += '*';
            console.log(result);
        } else {
            result = result.slice(0, -1);
            console.log(result);
            
        }        
    }
}

triangleOfStars(1)

