import { User } from './shared/User';
import { Router } from '@angular/router';
import { Http, RequestOptions, CookieXSRFStrategy, Response, Headers, Jsonp } from '@angular/http';
import { Observable } from 'rxJS/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class Authenticate {
    userId = 1;
    user = new User('email', 'password', 'name');

    constructor(private router: Router, private http: Http, private jsonp: Jsonp) { }
    authenticated = false;
    isAuthenticated() {
        return localStorage.getItem('currentUser') != null;
    }

    login(loginData) {
        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'Basic ' + btoa(loginData.user + ':' + loginData.pass)
            'Authorization': 'Basic ' + btoa('ClientId' + ':' + 'secret')
        });
        const options = new RequestOptions({ headers: headers });
        const creds = 'grant_type=password';
        const url = 'http://localhost:8085/auth/oauth/token?' + creds + '&username=' + loginData.user + '&password=' + loginData.pass;
        this.http.post(url, creds, options)
            .map(res => res.json()).subscribe(response => {
                console.log(response);
                localStorage.setItem('currentUser', JSON.stringify({
                    userName: loginData.user, token: response.access_token
                    , tokentype: response.token_type
                }));
                // this.getResource('http://localhost:8085/auth/user/' + loginData.user).subscribe(
                //     (response2) => {
                //         this.userId = response2.id;
                //         this.user = new User(response2.email, '', response2.name);
                //     },
                //     (error) => {
                //         console.log(error);
                //         localStorage.removeItem('currentUser');
                //     }

                // );

                this.getResource('http://localhost:8085/auth/user/' + loginData.user).subscribe(
                    (response2) => {
                        this.userId = response2.id;
                        this.user = new User(response2.email, '', response2.name);
                    },
                    (error) => console.log(error)
                );
                if (localStorage.getItem('bookingObj') == null) {
                    this.router.navigateByUrl('/');
                } else {
                    this.router.navigateByUrl('/bookingsuccess');
                }
            }, (error) => {
                console.log('error in', error);
                alert('Bad Credentials');
            });
    }

    getResource(resourceUrl) {
        // tslint:disable-next-line:max-line-length
        // const header = new Headers({ 'token': 'bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });
        console.log(JSON.parse(localStorage.getItem('currentUser')).tokentype);
        resourceUrl += '?access_token=' + JSON.parse(localStorage.getItem('currentUser')).token + '&token_type='
            + JSON.parse(localStorage.getItem('currentUser')).tokentype;
        // console.log(JSON.parse(localStorage.getItem('currentUser')).token);
        // const options = new RequestOptions({ headers: header });
        return this.http.get(resourceUrl)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error));

    }

    logout() {
        // localStorage.removeItem('currentUser');
        localStorage.clear();
        this.router.navigateByUrl('/');

    }
}
