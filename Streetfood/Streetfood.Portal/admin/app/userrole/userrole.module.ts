import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoleRoutingModule } from './userrole-routing.module';
import { UserRoleComponent } from './userrole.component';
import { PageHeaderModule } from '../shared';

@NgModule({
    imports: [CommonModule, UserRoleRoutingModule, PageHeaderModule],
    declarations: [UserRoleComponent]
})
export class UserRoleModule {}
