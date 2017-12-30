using Streetfood.Corelib.ServerModels;
using Streetfood.Corelib.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.Interface
{
    public interface IUserRepository : IRepository<sf_Core_User>
    {
        List<sf_Core_User> Authenticate(string username, string password);
    }
}
