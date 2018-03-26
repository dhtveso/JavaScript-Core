function firstAndLastKElement(arr) {
    let kElement = Number(arr[0]);

    let firstElement = arr.slice(1, kElement + 1);
    let lastElement = arr.slice(arr.length - kElement, kElement + 2);

    console.log(firstElement);
    console.log(lastElement);
    
    
}

firstAndLastKElement([2,
    7, 8, 9]
   );