function captureTheNumber(array) {
    let regex = new RegExp(/\d+/, 'g');
    let match;
    let result = [];

    for (const value of array) {
        while(match = regex.exec(value)){
            result.push(match);
        }
    }

    console.log(result.join(' '));
}

captureTheNumber(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45']);