function matchDate(dates) {
    let pattern = /\b([0-9]{1,2})-([A-Z]{1}[a-z]{2})-([0-9]{4})\b/g

    let matches = pattern.exec(dates);
    
    while (matches) {
        let allDay = matches[0];
        let day = matches[1];
        let month = matches[2];
        let year = matches[3];

        console.log(`${allDay} (Day: ${day}, Month: ${month}, Year: ${year})`);
        
        matches = pattern.exec(dates);
    }
}

matchDate(['I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.','My father is born on the 29-Jul-1955.']);
