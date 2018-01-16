function boxAndBottle(a,b){
    var needed = a / b;

    if (a % b != 0) {
        needed++;
    }

    return parseInt(needed);
}