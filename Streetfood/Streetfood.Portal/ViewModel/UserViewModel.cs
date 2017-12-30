using Streetfood.Corelib.ServerModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streetfood.Portal.ViewModel
{
    public class UserViewModel
    {
        public string username { get; set; }
        public string password { get; set; }
    }

    public class RoleViewModel
    {
        public string _id { get; set; }
        public string RoleName { get; set; }
        public string[] RolePermissionMenus { get; set; }
        public bool IsActive { get; set; }
    }

    public class MenuViewModel
    {
        public string _id { get; set; }
        public string menuName { get; set; }
        public string menuDescription { get; set; }
        public bool isActive { get; set; }
        public sf_Core_Roles roles { get; set; }
        public List<MenuViewModel> menu { get; set; }
    }
}
