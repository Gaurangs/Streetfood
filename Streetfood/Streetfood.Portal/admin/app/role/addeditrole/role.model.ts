export class Role {
    RoleName: string;
    RolePermissionMenus: string[];
    IsActive: boolean;
    menu: Menu[];
}
export class Menu {
    id: string;
    menuName: string;
    menuDescription: string;
    isActive: boolean;
}
