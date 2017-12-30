import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoleRoutingModule } from './addrole-routing.module';
import { AddRoleComponent } from './addrole.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleService } from '../../shared/services/role.service';
import { MatListModule, MatSelectModule, MatSelectionList, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, AddRoleRoutingModule, PageHeaderModule, FormsModule ,
        ReactiveFormsModule, MatListModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule ],
    declarations: [AddRoleComponent],
    providers: [RoleService]
})
export class AddRoleModule {}
