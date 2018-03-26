function interest(input) {

    let principal = Number(input[0]);
    let interest = Number(input[1]) / 100;    
    let periodPerYear = 12 / Number(input[2]);
    let time = Number(input[3]);

    let total = principal * (Math.pow(1 + (interest / period), ( period * time)));
    console.log(total.toFixed(2));
}

interest([1500, 4.3, 3, 6]);