function carFactory(initialCarParts) {
    let modifiedCar = {}
    let carriage = { 'type': initialCarParts.carriage, 'color': initialCarParts.color }
    let engine;
    let wheels;

    if (initialCarParts.power <= 90) {
        engine = { power: 90, volume: 1800 };
    } else if (initialCarParts.power <= 120) {
        engine = { power: 120, volume: 2400 };
    } else{
        engine = { power: 200, volume: 3500 };
    }

    if (initialCarParts.wheelsize % 2 == 0) {
        initialCarParts.wheelsize--;
    }
    wheels = Array(4).fill(initialCarParts.wheelsize);

    modifiedCar.model = initialCarParts.model;
    modifiedCar.engine = engine;
    modifiedCar.carriage = carriage;
    modifiedCar.wheels = wheels;

    return modifiedCar
}

console.log(carFactory({ model: 'VW Golf II',
                         power: 90,
                         color: 'blue',
                         carriage: 'hatchback',
                         wheelsize: 14 }));
