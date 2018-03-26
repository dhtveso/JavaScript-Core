function checkMovie(arr) {
    let dayInWeek = 0;
    let incomingDay = arr[1].toLowerCase();
    let incomingMovie = arr[0].toLowerCase();

    switch (incomingDay) {
        case 'monday':
            dayInWeek = 1;
            break;
        case 'tuesday':
            dayInWeek = 2;
            break;
        case 'wednesday':
            dayInWeek = 3;
            break;
        case 'thursday':
            dayInWeek = 4;
            break;
        case 'friday':
            dayInWeek = 5;
            break;
        case 'saturday':
            dayInWeek = 6;
            break;
        case 'sunday':
            dayInWeek = 7;
            break;
        default:
            console.log('Incorect day');
            break;
    }

    let cinemaInfo = {};
    cinemaInfo['the godfather'] = [12, 10, 15, 12.50,	15,	25, 30];
    cinemaInfo["schindler's list"] = [8.50, 8.50, 8.50, 8.50, 8.50, 15, 15];
    cinemaInfo['casablanca'] = [8, 8, 8, 8, 8, 10, 10];
    cinemaInfo['the wizard of oz'] = [10, 10, 10, 10, 10, 15, 15];

    for(key in cinemaInfo){
        let value = cinemaInfo[key];
        if (key == incomingMovie) {
            console.log(value[dayInWeek -1]);
        }
    }
}

checkMovie(["Schindler's LIST", 'monday']);