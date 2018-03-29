import { Table } from './Table';
import { Item } from './Item';

export class Restaurant {
    id: number;
    name: string;
    location: string;
    desc: string;
    rating: number;
    image: string;
    tables: Table[];
    items: Item[];

    constructor(id: number, name: string, desc: string, location: string, rating: number, image: string, tables: Table[], items: Item[]) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.location = location;
        this.rating = rating;
        this.image = image;
        this.tables = tables;
        this.items = items;
    }

}
