import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {
    }
    login(username: string, password: string) {
        const streetService = 'http://localhost:5000/';
        const body = JSON.stringify({ 'username' : username, 'password' : password });
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        // const options = new RequestOptions({ headers: headers });

        return this.http.post(`/api/user/authenticate`, body, { headers })
            .map((response: Response) => {
                console.log(response);
                if (response) {
                    localStorage.setItem('isLoggedin', JSON.stringify(response));
                }
                return response;
            });
    }
}
