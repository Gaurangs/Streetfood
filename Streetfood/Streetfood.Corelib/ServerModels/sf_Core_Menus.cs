using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.ServerModels
{
    public class sf_Core_Menus : Entity
    {
        public string menuName { get; set; }
        public string menuDescription { get; set; }
        public bool isActive { get; set; }
    }
}
