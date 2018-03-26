class Rat{
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    getRats() {
        return this.unitedRats
    }

    unite(otherRat) {
        if (typeof otherRat === typeof this) {
            let currentRat = `${otherRat}`;
            this.unitedRats.push(currentRat);
        }
    };

    toString() {
        let additionalRats = this.name;

        for (let i = 0; i < this.unitedRats.length; i++) {
            additionalRats += '\n' + `##${this.unitedRats[i]}`;
        }

        return additionalRats
    }
}




let rat2 = new Rat("Viktor");
let rat3 = new Rat("Vichi");
let rat4 = "fake rat";

rat2.unite(rat3);
let a = rat2.getRats().length
console.log();

//.to.be.equal(1,
    //"'Rat.unite()' function does not work properly");


// let test = new Rat("Pesho");
// console.log(test.toString()); //Pesho

// console.log(test.getRats()); //[]

// test.unite(new Rat("Gosho"));
// test.unite(new Rat("Sasho"));
// console.log(test.getRats());
// //[ Rat { name: 'Gosho', unitedRats: [] },
// //  Rat { name: 'Sasho', unitedRats: [] } ]

// console.log(test.toString());
// // Pesho
// // ##Gosho
// // ##Sasho
