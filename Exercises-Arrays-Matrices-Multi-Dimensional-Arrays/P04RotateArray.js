function arrayRotate(arr, reverseLeft = true){
    let count = Number(arr[arr.length -1]);
    arr.splice(arr.length-1, 1);

    for (let i = 0; i < count % arr.length; i++) {
        if(reverseLeft){
            arr.unshift(arr.pop());
          } else{
            arr.push(arr.shift());
          }
    }

    printArray(arr);

    function printArray(arr) {
        let result = '';
    
        for (let i = 0; i < arr.length; i++) {
            result += arr[i] + ' ';
        }
        console.log(result);
    }
} 

arrayRotate([1, 2, 3, 4, 2]);
arrayRotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

  