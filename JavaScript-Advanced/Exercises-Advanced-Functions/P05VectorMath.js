let commandExecuter = (function () {
    let arr = [];
    function add(vect1, vect2) {
        let p1 = Number(vect1[0]) + Number(vect2[0]);
        let p2 = Number(vect1[1]) + Number(vect2[1]);
        arr.push(p1);
        arr.push(p2)
        return arr;
    }

    function multiply(vect1, scalar) {
        let p1 = Number(vect1[0]) * scalar;
        let p2 = Number(vect1[1]) * scalar;
        arr.push(p1);
        arr.push(p2)
        return arr;
    }

    function length(vect1) {
        p1 = Number(vect1[0]);
        p2 = Number(vect1[1])
        let result = Math.sqrt((p1 * p1) + (p2 * p2));
        arr.push(result);
        return arr[0];
    }

    function dot(vect1, vect2) {
        let p1 = Number(vect1[0]) * Number(vect2[0]);
        let p2 = Number(vect1[1]) * Number(vect2[1]);
        let result = p1 + p2;
        arr.push(result);
        return arr[0];
    }

    function cross(vect1, vect2) {
        let p1 = Number(vect1[0]) * Number(vect2[1]);
        let p2 = Number(vect1[1]) * Number(vect2[0]);
        let result = p1 - p2;
        arr.push(result);
        return arr[0];
    }

    return { add, multiply, dot, cross, length }
})()

console.log(commandExecuter.dot([2, 3], [2, -1]));
