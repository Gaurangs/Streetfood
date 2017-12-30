using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streetfood.Portal.ViewModel
{
    public class ApiResponse
    {
        public object[] result { get; set; }
        public int status { get; set; }
        public string statustext { get; set; }
    }
}
