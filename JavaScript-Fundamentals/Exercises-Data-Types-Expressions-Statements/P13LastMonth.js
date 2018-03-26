function LastMonth(input) {

    let month = Number(input[1]);
    let year = Number(input[2]);
    let dates = Number(input[3]);

    let date = new Date(year, month - 1); 
     date.setDate(0); 

    console.log(date.getDate()); 
}