class Player {
    constructor(nickName){
        this.nickName = nickName;
        this.scores = [];
    }

    get scoreCount(){
        return this.scores.length;
    }
    
    get highestScore() {
        
        return this.scores[0]
    }

    get topFiveScore() {
        let a = this.scores;
        if (a.length <= 5) {
            return this.scores
        }

        return a.slice(0,5)//.split(',');
    }

    addScore(score) {
        if (!isNaN(score) && score !== null) {
            this.scores.push(Number(score));
            this._sort();
        }

        return this;
    }

    toString() {
        return `${this.nickName}: [${this.scores.join(',')}]`
    }

    _sort() {
        this.scores.sort((a,b) => b - a);
    }
}


let p = new Player('Mimi');

p.addScore(300) //p, "Function should be chainable.");