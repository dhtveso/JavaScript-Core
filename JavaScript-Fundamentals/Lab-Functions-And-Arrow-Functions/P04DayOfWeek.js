function dayOfWeek(nameOfDay) {
    let weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (weekDay.includes(nameOfDay)) {
        let i = weekDay.indexOf(nameOfDay);
        console.log(i + 1);
    } else{
        console.log('error');
    }
}

dayOfWeek('Thursdsay')