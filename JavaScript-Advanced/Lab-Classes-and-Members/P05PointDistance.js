class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2){
        let diffx = p1.x - p2.x;
        let diffy = p1.y - p2.y;
        let powX = Math.pow(diffx, 2);
        let powY = Math.pow(diffy, 2);
        let result = Math.sqrt(powX + powY);
        return result;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
