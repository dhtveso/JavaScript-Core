function fromInchToFeet(inch) {
    let ft = Math.floor(inch / 12);
    let ftRemainder = inch % 12;

    console.log(`${ft}'-${ftRemainder}"`);
    
}

fromInchToFeet(11);