function robot() {
    let microelements = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    let products = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'coke': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        },
        'omelet': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        }, 
        'cheverme': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        }
    }

    function restock(microelement, quantity) {
        microelements[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let currentProduct = false;
        for (let key in products[recipe]) {
                if (products[recipe][key] * Number(quantity) <= microelements[key]) {
                    currentProduct = true;
                } else {
                    return `Error: not enough ${key} in stock`
                }
            }
            
        if (currentProduct) {
            for (let key in products[recipe]) {
                microelements[key] -= products[recipe][key] * quantity; 
            }
            return 'Success';
        }
    }

    function report() {
        return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
    }

    return function (info) {
            let currentLine = info.split(' ');
            if (currentLine.length === 1) {
                currentLine.shift();
                return report();
            } else {
                if (currentLine[0] === 'prepare') {
                    currentLine.shift();
                    return prepare(currentLine[0], currentLine[1]);
                } else {
                    let microelements = currentLine[1];
                    let quantity = Number(currentLine[2]);
                    return restock(microelements, quantity);
                }
        }
    }

    // return {execute}
};

let a = robot()
console.log(a('report'))