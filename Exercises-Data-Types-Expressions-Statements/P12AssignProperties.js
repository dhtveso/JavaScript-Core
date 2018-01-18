function composesObject(arr) {
    let objectResult = {};
    
    for (let i = 0; i < arr.length; i+=2) {
        objectResult[arr[i]] = arr[i+1];
    }

    console.log(objectResult);
    
}

composesObject(['ssid', '90127461', 'status', 'admin', 'expires', '600']);