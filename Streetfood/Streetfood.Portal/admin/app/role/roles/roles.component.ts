import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { RoleService } from '../../shared/services/role.service';
import { Observable } from 'rxjs/Observable';
import { Roles } from '../role.model';
import {  MatSort, MatTableDataSource, MatFormField, MatPaginator } from '@angular/material';
@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss'],
    animations: [routerTransition()]
})
export class RolesComponent implements OnInit {
    displayedColumns = ['rolename', 'rolepermissionmenus', 'isactive', 'editrole'];
    dataSource: MatTableDataSource<Roles>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(public router: Router, public roleService: RoleService) {
        this.Roles();
    }
     ngOnInit() {
     }

     loadAfterDataSource() {
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
     }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

    Roles(): Roles[] {
    let roles: Roles[] = [];
    this.roleService.getRoles()
    .subscribe(
        (data: any) => {
            if (data) {
                roles = data;
                this.dataSource = new MatTableDataSource(roles);
                this.loadAfterDataSource();
            }
        },
        error => {
            console.log(error);
            roles = null;
        });
        return roles;
    }
}
