export class Table {
    id: number;
    type: string;
    noOfSeats: number;
    price: number;
    constructor(id: number, type: string, noOfSeats: number, price: number) {
        this.id = id;
        this.type = type;
        this.noOfSeats = noOfSeats;
        this.price = price;
    }


}
