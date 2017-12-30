import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { PageHeaderModule } from '../../shared';
import { MatTableModule,
         MatPaginatorModule, MatSortModule, MatFormFieldModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RoleService } from '../../shared/services/role.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
    imports:
    [
        CommonModule,
        RolesRoutingModule,
        PageHeaderModule,
        MatTableModule,
        HttpClientModule,
        MatFormFieldModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule],
    declarations: [RolesComponent],
    providers: [RoleService]
})
export class RolesModule {}
