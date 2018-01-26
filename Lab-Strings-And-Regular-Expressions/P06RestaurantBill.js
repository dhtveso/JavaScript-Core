function printBill(array) {
    let products = array.filter((x, y) => y % 2 == 0);
    let sum = array.filter((x, y) => y % 2 == 1).map(Number).reduce((a,b) => a + b);

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);
    
}

printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);