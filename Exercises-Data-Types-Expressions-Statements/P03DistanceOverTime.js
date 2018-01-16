function calcDistance(v1,v2,t) {
    let speed = Math.abs(v1 - v2);
    let distanceInMether = (t / 3600) * speed * 1000;
    console.log(distanceInMether);
}

calcDistance(11, 10, 120)