function carStore(array) {
    let carCollection = new Map();

    for (let i = 0; i < array.length; i++) {
        let currentLine = array[i].split(/\s\|\s/).filter(x => x !== '');
        let mark = currentLine[0];
        let model = currentLine[1];
        let price = Number(currentLine[2]);

        if (!carCollection.has(mark)) {
            carCollection.set(mark, new Map());
            carCollection.get(mark).set(model, price);
            
        } else {
            if (!carCollection.get(mark).has(model)) {
                carCollection.get(mark).set(model, price);
            } else{
                let oldPrice = carCollection.get(mark).get(model);
                carCollection.get(mark).set(model, price + oldPrice);
                
            }
        }
    }

    for (let [key, value] of carCollection) {
        console.log(`${key}`);
        for (let [model,price] of value) {
            console.log(`###${model} -> ${price}`);
            
        }
    }
}