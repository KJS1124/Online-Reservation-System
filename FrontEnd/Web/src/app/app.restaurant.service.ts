import { Restaurant } from './shared/Restaurant';
import { Table } from './shared/Table';
import { Item } from './shared/Item';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxJS/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }
    getRestaurants() {
        return this.http.get('http://localhost:8070/restaurant/').map(
            (response: Response) => {
                console.log(response);
                const data = response.json();
                return data;
            }
            // tslint:disable-next-line:semicolon
        ).catch((error: Response) => {
            console.log(error);
            return Observable.throw(error);
        }
        );
    }

    getRestaurantsByName(name: string) {
        return this.http.get('http://localhost:8070/restaurant/name/' + name).map(
            (response: Response) => {
                console.log(response);
                const data = response.json();
                return data;
            }
            // tslint:disable-next-line:semicolon
        ).catch((error: Response) => {
            console.log(error);
            return Observable.throw(error);
        }
        );
    }

    getRestaurant(id: number) {
        return this.http.get('http://localhost:8070/restaurant/' + id).map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }

    getFamousFamousRestaurants() {
        return this.http.get('http://localhost:8070/restaurant/famous').map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }
}
