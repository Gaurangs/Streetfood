using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.Repository
{
    public interface IUserRepository : IRepository<mt_Core_User>
    {
        List<mt_Core_User> Authenticate(string username, string password);
    }
}
