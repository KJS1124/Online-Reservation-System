import { Router } from '@angular/router';
import { Http, RequestOptions, CookieXSRFStrategy, Response, Headers } from '@angular/http';
import { Observable } from 'rxJS/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckingService {
    constructor(private _router: Router, private _http: Http, private cookieService: CookieService) { }

    obtainAccessToken(loginData) {

        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'Basic ' + btoa(loginData.user + ':' + loginData.pass)
            'Authorization': 'Basic ' + btoa('ClientId' + ':' + 'secret')
        });
        const options = new RequestOptions({ headers: headers });
        const creds = 'grant_type=password';
        const url = 'http://localhost:8085/auth/oauth/token?' + creds + '&username=' + loginData.user + '&password=' + loginData.pass;
        this._http.post(url, creds, options)
            .map(res => res.json()).subscribe(response => {
                localStorage.setItem('currentUser', JSON.stringify({ userName: loginData.user, token: response.access_token }));
                this._router.navigateByUrl('/');
            }, (error) => {
                console.log('error in', error);
            });
    }


    getResource(resourceUrl) {
        // tslint:disable-next-line:max-line-length
        const header = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token });
        const options = new RequestOptions({ headers: header });
        return this._http.get(resourceUrl, options)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    checkCredentials() {
        if (!this.cookieService.check('access_token')) {
            this._router.navigate(['/login']);
        }
    }

}


