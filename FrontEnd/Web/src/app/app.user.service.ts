import { Restaurant } from './shared/Restaurant';
import { Table } from './shared/Table';
import { Item } from './shared/Item';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, CookieXSRFStrategy, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { User } from './shared/User';


@Injectable()
export class UserService {
    constructor(private http: Http) { }

    insertUser(user: User) {
        const headers = new Headers({
            'content-type': 'application/json',
        });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8085/auth/signup', user, options)
            .map((res: Response) => {
                return res.json();
            }).catch((error) => Observable.throw(error));
    }
}
