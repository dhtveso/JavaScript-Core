function ticketSystem(array, sorting) {
    '<destination>|<price>|<status>'
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination,
            this.price = price,
            this.status = status;
        }

        static sortTicket(arr){
            if (sorting === 'destination') {
                for (let i = 0; i < arr.length; i++) {
                    return arr.sort((a,b) => a.destination.localeCompare(b.destination))
                }
            } else if (sorting === 'status'){
                return arr.sort((a,b) => a.status.localeCompare(b.status))
            } else {
                return arr.sort((a,b) => a - b)
            }
        }
    }
    let unsortedArray = [];

    for (let i = 0; i < array.length; i++) {
        let ticketData = array[i].split('|').filter(x => x !== '');
        let destination = ticketData[0];
        let price = Number(ticketData[1]);
        let status = ticketData[2];

        let currentTicket = new Ticket(destination, price, status);
        unsortedArray.push(currentTicket);
    }

    return Ticket.sortTicket(unsortedArray);
}

console.log(ticketSystem(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))