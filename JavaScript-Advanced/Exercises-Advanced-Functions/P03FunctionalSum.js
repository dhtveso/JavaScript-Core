let functionalSum = 
(function () {
    let sum = 0;

    return function add(num) {
        sum += num;
        add.toString = () => sum;
        return add;
    }
})();