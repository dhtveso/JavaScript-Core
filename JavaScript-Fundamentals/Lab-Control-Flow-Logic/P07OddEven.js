function oddOrEven(a){
    if (a % 2 == 0) {
        console.log('even');
        
    } else if (Math.abs(a % 2 ) == 1) {
        console.log('odd');
        
    } else{
        console.log('invalid');
        
    }
}