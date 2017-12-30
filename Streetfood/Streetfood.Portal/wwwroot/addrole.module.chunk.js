webpackJsonp(["addrole.module"],{

/***/ "../../../../../admin/app/role/addeditrole/addrole-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addrole_component__ = __webpack_require__("../../../../../admin/app/role/addeditrole/addrole.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__addrole_component__["a" /* AddRoleComponent */]
    },
];
var AddRoleRoutingModule = /** @class */ (function () {
    function AddRoleRoutingModule() {
    }
    AddRoleRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AddRoleRoutingModule);
    return AddRoleRoutingModule;
}());



/***/ }),

/***/ "../../../../../admin/app/role/addeditrole/addrole.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'User Role'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <form role=\"form\" #f=\"ngForm\" novalidate>\r\n                <fieldset class=\"form-group\">\r\n                    <label>Role Name</label>\r\n                    <input class=\"form-control\" placeholder=\"Enter Role Name\" name=\"RoleName\" [(ngModel)]=\"role.RoleName\" required>\r\n                </fieldset>    \r\n                <!-- <div class=\"form-group\">\r\n                    <label>Menus</label>\r\n                    <mat-selection-list  name=\"RolePermissionMenus\" [(ngModel)]=\"role.RolePermissionMenus\" ngDefaultControl>\r\n                        <mat-list-option *ngFor=\"let itemmenu of role.menu\" [value]=\"itemmenu?.menuName\">\r\n                          {{itemmenu?.menuName}}\r\n                        </mat-list-option>\r\n                    </mat-selection-list>\r\n                </div>                 -->\r\n                <div class=\"form-group\">                    \r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Menu\" name=\"RolePermissionMenus\" [(value)]=\"role.RolePermissionMenus\" [(ngModel)]=\"role.RolePermissionMenus\" ngDefaultControl multiple>                         \r\n                          <mat-option *ngFor=\"let itemmenu of role.menu\" [value]=\"itemmenu?._id\">\r\n                              {{itemmenu?.menuName}}\r\n                        </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"checkbox\">\r\n                        <label>\r\n                            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"role.IsActive\" [checked]=\"role.IsActive\" name=\"isactive\" required>IsActive?</mat-checkbox>\r\n                            <!-- <input type=\"checkbox\" [value]=\"role.isActive\" name=\"IsActive\" [(ngModel)]=\"role.isActive\" required> Is Active? -->\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!f.form.valid\" (click)='insertNew()'>Submit</button>\r\n                <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../admin/app/role/addeditrole/addrole.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../admin/app/role/addeditrole/addrole.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../admin/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_role_service__ = __webpack_require__("../../../../../admin/app/shared/services/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_model__ = __webpack_require__("../../../../../admin/app/role/addeditrole/role.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddRoleComponent = /** @class */ (function () {
    function AddRoleComponent(router, roleService, acRouter) {
        var _this = this;
        this.router = router;
        this.roleService = roleService;
        this.acRouter = acRouter;
        this.role = new __WEBPACK_IMPORTED_MODULE_4__role_model__["a" /* Role */]();
        acRouter.params.subscribe(function (params) {
            if (params['id'] === undefined) {
                _this.IsEditMode = false;
                _this.roleid = '';
            }
            else {
                _this.IsEditMode = true;
                _this.roleid = params['id'];
            }
            _this.getMenus();
        });
    }
    AddRoleComponent.prototype.ngOnInit = function () {
    };
    AddRoleComponent.prototype.insertNew = function () {
        var _this = this;
        this.roleService.insertNewRole(this.role)
            .subscribe(function (data) {
            _this.router.navigate(['/roles']);
        }, function (error) {
            console.log(error);
        });
    };
    AddRoleComponent.prototype.getMenus = function () {
        var _this = this;
        this.roleService.getMenus(this.roleid)
            .subscribe(function (data) {
            if (data != null) {
                if (_this.IsEditMode) {
                    _this.role.RoleName = data['roles'].roleName;
                    _this.role.IsActive = data['roles'].isActive;
                    _this.role.menu = data['menu'];
                    var arrayRolePermission = (data['roles'].rolePermissionMenus).split(',');
                    _this.role.RolePermissionMenus = arrayRolePermission;
                }
                else {
                    _this.role.menu = data['menu'];
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-role',
            template: __webpack_require__("../../../../../admin/app/role/addeditrole/addrole.component.html"),
            styles: [__webpack_require__("../../../../../admin/app/role/addeditrole/addrole.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_role_service__["a" /* RoleService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AddRoleComponent);
    return AddRoleComponent;
}());



/***/ }),

/***/ "../../../../../admin/app/role/addeditrole/addrole.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleModule", function() { return AddRoleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addrole_routing_module__ = __webpack_require__("../../../../../admin/app/role/addeditrole/addrole-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addrole_component__ = __webpack_require__("../../../../../admin/app/role/addeditrole/addrole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../admin/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_role_service__ = __webpack_require__("../../../../../admin/app/shared/services/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddRoleModule = /** @class */ (function () {
    function AddRoleModule() {
    }
    AddRoleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__addrole_routing_module__["a" /* AddRoleRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatCheckboxModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__addrole_component__["a" /* AddRoleComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_role_service__["a" /* RoleService */]]
        })
    ], AddRoleModule);
    return AddRoleModule;
}());



/***/ }),

/***/ "../../../../../admin/app/role/addeditrole/role.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Role; });
/* unused harmony export Menu */
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());

var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());



/***/ })

});
//# sourceMappingURL=addrole.module.chunk.js.map