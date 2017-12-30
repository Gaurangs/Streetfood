import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, public authenticateService: AuthenticationService) {}
    ngOnInit() {}
    loginUser(form: NgForm) {
    let resEmail = false;
    this.authenticateService.login(form.value.email, form.value.password)
    .subscribe(
        (data: any) => {
            if (data) {
                resEmail = data;
                 this.router.navigate(['/dashboard']);
            }
        },
        error => {
            console.log(error);
        });
    console.log('Email is :' + resEmail);
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
