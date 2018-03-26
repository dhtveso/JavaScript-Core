function result(name, age, weight, height) {
    
    let obj = {'name': name,
               'personalInfo': {
                        'age': age,
                        'weight': weight,
                        'height': height
                    },
                'BMI': (function () {
                        let currentHeight = height / 100;
                        return Math.round(weight / (currentHeight * currentHeight));
                    })()
            };

    obj.status = (function () {
                if (obj.BMI < 18.5) {
                    return 'underweight';
                } else if (obj.BMI < 25) {
                    return 'normal';
                } else if (obj.BMI < 30) {
                    return 'overweight';
                } else if (obj.BMI >= 30){
                    return 'obese';
                }
            })();
    if (obj.BMI >= 30) {
        obj['recommendation'] = 'admission required';
    }
    return obj;
}

console.log(result('Peter', 27, 70, 180))