import { Restaurant } from './shared/Restaurant';
import { Table } from './shared/Table';
import { Item } from './shared/Item';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxJS/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class BookingService {
    constructor(private http: Http) { }

    insertBooking(data: any) {
        const email = JSON.parse(localStorage.getItem('currentUser')).userName;
        return this.http.post('http://localhost:8070/booking' + '?access_token='
            + JSON.parse(localStorage.getItem('currentUser')).token + '&token_type='
            + JSON.parse(localStorage.getItem('currentUser')).tokentype + '&email='
            + email, data);
    }
}
