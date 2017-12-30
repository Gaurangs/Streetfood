using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streetfood.Portal.Global
{
    public static class Utility
    {
        public static string[] CommaSepratedStringToList(string inputString)
        {
            string[] commaList;
            commaList = inputString.Split(',').ToArray();
            return commaList;
        }

        public static string stringListToCommaSepratedString(string[] inputString)
        {
            string commaString;
            commaString = string.Join(",", inputString.ToArray());            
            return commaString;
        }
    }
}
