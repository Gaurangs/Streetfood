using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.ServerModels
{
    public class sf_Core_User : Entity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordAlt { get; set; }
        //public byte[] PasswordHash { get; set; }
        //public byte[] PasswordAlt { get; set; }
        public bool IsActive { get; set; }
    }
}
