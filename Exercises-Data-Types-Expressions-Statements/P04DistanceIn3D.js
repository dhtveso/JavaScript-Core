function distanceIn3D(arr) {
    let x = arr[0];
    let y = arr[1];
    let z = arr[2];

    let x1= arr[3];
    let y1 = arr[4];
    let z1 = arr[5];

    let distance = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2)+ Math.pow(z - z1, 2));

    console.log(distance);
}

distanceIn3D([1, 1, 0, 5, 4, 0]);