function systemComponent(array) {
    let map = new Map();

    for (let i = 0; i < array.length; i++) {
        let currentLine = array[i].split(/\s\|\s/).filter(x => x !== '');
        let systemName = currentLine[0];
        let componentName = currentLine[1];
        let subComponent = currentLine[2];

        if (!map.has(systemName)) {
            let currentMap = new Map();
            currentMap.set(componentName, []);
            currentMap.get(componentName).push(subComponent);
            map.set(systemName, currentMap)
        } else{
            if (!map.get(systemName).has(componentName)) {
                map.get(systemName).set(componentName, []);
                map.get(systemName).get(componentName).push(subComponent);
            } else{
                map.get(systemName).get(componentName).push(subComponent);
            }
        }
    }
    
    let result = Array.from(map.keys()).sort(function (a, b) {
        if (map.get(a).size !== map.get(b).size) {
            return map.get(b).size - map.get(a).size;
        }
        else {
            return b.toLowerCase() < a.toLowerCase()
        }
    });
    
    for (let system of result) {
        console.log(system);

        let components = Array.from(map.get(system).keys()).sort(function (a, b) {
            return map.get(system).get(b).length - map.get(system).get(a).length;
        });
        
        for (let component of components) {
            console.log(`|||${component}`);

            for (let subComponent of map.get(system).get(component)) {
                console.log(`||||||${subComponent}`);
                
            }
        }
    }
}

systemComponent([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);