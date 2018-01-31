function populationInTown(array) {
    let populationInfo = {};

    for (let i = 0; i < array.length; i++) {
        let currentInfo = array[i].split(/\s<->\s/);
        let town = currentInfo[0];
        let population = Number(currentInfo[1]);

        if (!populationInfo.hasOwnProperty(town)) {
            populationInfo[town] = population;
        } else{
            populationInfo[town] += population;
        }
    }

    for (let currentTown in populationInfo) {
        console.log(`${currentTown} : ${populationInfo[currentTown]}`);
    }
}

populationInTown(
['Sofia <-> 1200000',
 'Montana <-> 20000',
 'New York <-> 10000000',
 'Washington <-> 2345000',
 'Las Vegas <-> 1000000']);