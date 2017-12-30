import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-userrole',
    templateUrl: './userrole.component.html',
    styleUrls: ['./userrole.component.scss'],
    animations: [routerTransition()]
})
export class UserRoleComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
