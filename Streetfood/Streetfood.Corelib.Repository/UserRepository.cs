using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace Streetfood.Corelib.Repository
{
    public class UserRepository : MongoRepository<mt_Core_User>, IUserRepository
    {
        public UserRepository(IOptions<Settings> options):base(options)
        {
        }

        public List<mt_Core_User> Authenticate(string username, string password)
        {           
            if (string.IsNullOrEmpty(username))
                return null;

            var user = this.GetAll().Result.Where(x=>x.UserName==username&& x.PasswordAlt == password).ToList() ;
            return user;
        }

        public static string Base64Encode(string plainText)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        public static string Base64Decode(string base64EncodedData)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }
    }
}
