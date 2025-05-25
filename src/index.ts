class SeatAssignment {
    //A1, A2, ....
    //Maaz, Ali, ....
    //Index Signature Property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Maaz';
seats.A2 = 'Ali';
// seats.A2 = 2; //Type 'number' is not assignable to type 'string'