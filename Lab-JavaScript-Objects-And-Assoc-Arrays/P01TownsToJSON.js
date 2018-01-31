function townToJson(array) {
    let arr = [];
    
    for (const str of array.splice(1)) {
        let obj = {}
        let currentInfo = str.split(/\s*\|\s*/).filter(x => x !== "");
        let town = currentInfo[0];
        let latitude = Number(currentInfo[1]);
        let longtitude = Number(currentInfo[2]);

        obj.Town = town;
        obj.Latitude = latitude;
        obj.Longitude = longtitude;
        
        arr.push(obj);
    }

    console.log(JSON.stringify(arr));
}