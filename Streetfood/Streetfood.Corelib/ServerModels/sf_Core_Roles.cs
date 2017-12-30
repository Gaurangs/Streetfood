using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.ServerModels
{
    public class sf_Core_Roles: Entity
    {
        public string RoleName { get; set; }
        public string RolePermissionMenus { get; set; }
        public bool IsActive { get; set; }
    }
}
