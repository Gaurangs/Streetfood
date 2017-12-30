import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, HttpModule,  Response } from '@angular/http';
import { Role } from '../../role/addeditrole/role.model';
import { Observable } from 'rxjs/Observable';
import { Roles } from '../../role/role.model';
@Injectable()
export class RoleService {
    constructor(private http: HttpClient) {
    }

    getRoles() {
        return this.http.get<Roles>(`/api/user/getallroles`);
    }

    insertNewRole(role: Role) {
        const body = role;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(`/api/user/newrole`, body, { headers })
            .map((response: Response) => {
                console.log(response);
            });
    }

    getMenus(roleid: string) {
        return this.http.get('/api/menu/getallMenus?roleID=' + roleid);
    }
}
