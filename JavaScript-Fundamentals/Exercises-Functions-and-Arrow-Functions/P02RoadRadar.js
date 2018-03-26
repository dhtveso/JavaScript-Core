function radar(speedInfo) {
    let currentSpeed = speedInfo[0];
    let place = speedInfo[1];
    let neededSpeed = allowedSpeed(place);
    console.log(speedChecker(currentSpeed, neededSpeed));

    function allowedSpeed(place) {
    let obj = { motorway: 130, interstate: 90, city: 50, residential: 20  }
    if (obj[place]) {
        return obj[place]
    }};

    function speedChecker(currentSpeed, neededSpeed) {
        let different = currentSpeed - neededSpeed;

        if (different <= 0) {
            return '';
        } else if (different > 0 && different <= 20) {
            return 'speeding';
        } else if (different > 20 && different <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}