function heroicInventory(array) {
    let collectionOfheroes = [];
    
    for (let i = 0; i < array.length; i++) {
        let obj = {name: '', level: 0, items: []};
        let currentHero = array[i].split(/\s\/\s/);
        let name = currentHero[0];
        let level = Number(currentHero[1]);
        let items = [];

        if (currentHero.length > 2) {
            items = currentHero[2].split(/,\s/);
        }
        obj.name = name;
        obj.level = level;
        obj.items = items;

        collectionOfheroes.push(obj);
    }
    
    console.log(JSON.stringify(collectionOfheroes));
}

heroicInventory([
    'Isacc / 25 / Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);