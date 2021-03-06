import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';
@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [LoginComponent],
    providers: [AuthenticationService]
})
export class LoginModule {
}
