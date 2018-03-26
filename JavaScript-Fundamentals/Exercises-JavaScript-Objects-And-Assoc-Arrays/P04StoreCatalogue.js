function storeCatalogue(array) {
    let catalogue = {};

    for (let i = 0; i < array.length; i++) {
        let currentRow = array[i].split(/\s:\s/).filter(x => x !== '');
        let currentProduct = currentRow[0];
        let price = Number(currentRow[1]);
        let letter = currentProduct.substring(0,1);
        let obj = {currentProduct, price};
        if (!catalogue.hasOwnProperty(letter)) {
            catalogue[letter] = [];
            catalogue[letter].push(obj);
        } else{
            catalogue[letter].push(obj);
        }
    }
    
    let keys = Object.keys(catalogue).sort();
    
    for (let letter of keys) {
        let sortedResult = catalogue[letter].sort((a, b) => a.currentProduct.localeCompare(b.currentProduct));

        console.log(`${letter}`);
        
        for (let product in sortedResult) {
            console.log(`  ${sortedResult[product].currentProduct}: ${sortedResult[product].price}`);
        }
    }
}