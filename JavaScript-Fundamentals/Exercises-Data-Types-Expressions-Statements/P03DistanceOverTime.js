function calcDistance(arr) {
    let v1 = arr[0];
    let v2 = arr[1];
    let t = arr[2];
    let speed = Math.abs(v1 - v2);
    let distanceInMether = (t / 3600) * speed * 1000;
    console.log(distanceInMether);
}

calcDistance([0, 60, 3600])