function checkPoints(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    printResult(x1,y1, checkIsValid(x1,y1));
    printResult(x2,y2, checkIsValid(x2,y2));
    printResult(x1, y1, checkAllPoint(x1, y1, x2, y2), x2, y2)

    function checkIsValid(p1, p2) {
        if (p1 == 0 || p2 == 0) {
            return true;
        }
        return false;
    }

    function checkAllPoint(p1, p2, p3, p4) {
        if (p1 == p3 || p1 == p4 || p2 == p3 || p2 == p4) {
            return true;
        } else {
            return false;
        }
    }

    function printResult(p1, p2, isValid, p3, p4) {
        if (p3 == undefined || p4 == undefined) {
            p3 = 0;
            p4 = 0;
        }
        if (isValid) {
            console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is valid`);
        } else {
            console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is invalid`);
        }
    }
}

checkPoints([0, 0, 0, 0]);