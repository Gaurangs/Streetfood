import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { RoleService } from '../../shared/services/role.service';
import { NgForm } from '@angular/forms';
import { Role } from './role.model';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
    selector: 'app-add-role',
    templateUrl: './addrole.component.html',
    styleUrls: ['./addrole.component.scss'],
    animations: [routerTransition()]
})
export class AddRoleComponent implements OnInit {
    role =  new Role();
    roleid: string;
    IsEditMode: boolean;
    constructor(public router: Router, public roleService: RoleService, public acRouter: ActivatedRoute ) {
          acRouter.params.subscribe( params => {
            if (params['id'] === undefined) {
                this.IsEditMode = false;
                this.roleid = '';
            } else {
                this.IsEditMode = true;
                this.roleid = params['id'];
            }
            this.getMenus();
        }
        );
    }

    ngOnInit() {
     }

    insertNew() {
         this.roleService.insertNewRole(this.role)
         .subscribe(
             data => {
                 this.router.navigate(['/roles']);
             },
             error => {
                 console.log(error);
             });
    }

    getMenus() {

            this.roleService.getMenus(this.roleid)
            .subscribe(
            data => {
                if (data != null) {
                    if (this.IsEditMode) {
                        this.role.RoleName = data['roles'].roleName;
                        this.role.IsActive = data['roles'].isActive;
                        this.role.menu = data['menu'];
                        const arrayRolePermission = (data['roles'].rolePermissionMenus).split(',');
                        this.role.RolePermissionMenus = arrayRolePermission;
                    } else {
                        this.role.menu = data['menu'];
                    }
                 }
            },
            error => {
                console.log(error);
            }
        );
    }
}
