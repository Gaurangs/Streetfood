using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.ServerModels
{
    public class sf_Core_UserRoles : Entity
    {
        public string UserID { get; set; }
        public string RoleID { get; set; }
        public bool IsActive { get; set; }
    }
}
