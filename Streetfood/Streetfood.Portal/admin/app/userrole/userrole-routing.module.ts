import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRoleComponent } from './userrole.component';

const routes: Routes = [
    {
        path: '', component: UserRoleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoleRoutingModule {
}
