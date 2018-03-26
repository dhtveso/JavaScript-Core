function cityMarket(array) {
    let market = new Map();

    for (let i = 0; i < array.length; i++) {
        let marketInfo = array[i].split(/\s->\s|\s:\s/).filter(s => s !== "");
        let town = marketInfo[0];
        let product = marketInfo[1];
        let amountOfSales = Number(marketInfo[2]);
        let priceForOneUnit = Number(marketInfo[3]);

        if (!market.has(town)) {
            let itemsMap = new Map();
            itemsMap.set(product, amountOfSales * priceForOneUnit);
            market.set(town, itemsMap);
        } else {
            if (!market.get(town).has(product)) {
                market.get(town).set(product, amountOfSales * priceForOneUnit);
            } else{
                let newValue = amountOfSales * priceForOneUnit;
                let oldValue = market.get(town).get(product);

                if (oldValue) {
                    newValue += oldValue;
                }
                market.get(town).set(product, newValue);                
            }
        }
    }

    for (let [key, value] of market) {
        console.log(`Town - ${key}`);
        
        for (const [product, price] of value) {
            console.log(`$$$${product} : ${price}`);
            
        }
    }
}

cityMarket([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Laptops HP -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);