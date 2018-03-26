function cookingByNumber(operations) {
    let startingPoint = operations[0];

    for (let i = 1; i <= 5; i++) {
        startingPoint = checkoperation(operations[i], startingPoint);
        console.log(startingPoint);
    }


    function checkoperation(operation, startingPoint) {
        switch (operation) {
            case 'chop': return chop(startingPoint);
            case 'dice': return dice(startingPoint);
            case 'spice': return spice(startingPoint);
            case 'bake': return bake(startingPoint);
            case 'fillet': return fillet(startingPoint);
            default:
                break;
        }    
    }

    function chop(startingPoint) {
        return startingPoint /= 2;
    }

    function dice(startingPoint) {
        return startingPoint = Math.sqrt(startingPoint);
    }

    function spice(startingPoint) {
        return startingPoint += 1;
    }

    function bake(startingPoint) {
        return startingPoint *= 3;
    }

    function fillet(startingPoint) {
        return startingPoint -= startingPoint * 0.2;
    }
}

cookingByNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);