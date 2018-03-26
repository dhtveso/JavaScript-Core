let Person = require('./P02InheritingToString')

function extendClass(classToExtend) {
    classToExtend.prototype.species = "Human"
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendClass(Person);
let a = new Person('Stefcho kesha', 'aa@aa.bg');
console.log(a);
console.log(a.toSpeciesString())
