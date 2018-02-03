function cappyJuice(array) {
    let juiceCollection = new Map();
    let bottles = new Map();

    for (let i = 0; i < array.length; i++) {
        let currentJuiceInfo = array[i].split(/=>/);
        let name = currentJuiceInfo[0];
        let quantity = Number(currentJuiceInfo[1]);

        if (!juiceCollection.has(name)) {
            juiceCollection.set(name, quantity);
        } else{
            juiceCollection.set(name, juiceCollection.get(name) + quantity);
        }

        if (juiceCollection.get(name) >= 1000) {
            bottles.set(name, Math.floor(juiceCollection.get(name) / 1000))
        }
    }

    for (let [key, value] of bottles) {
        console.log(`${key}=> ${parseInt(value)}`);
    }
}

cappyJuice([
    'Orange => 2000',
    'Peach => 2232',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);