using Microsoft.Extensions.Options;
using Streetfood.Corelib.Interface;
using Streetfood.Corelib.MongoHelperclass;
using Streetfood.Corelib.ServerModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.Repository.Repositories
{
    public class UserRoleRepository: MongoRepository<sf_Core_UserRoles>, IUserRoleRepository
    {
        public UserRoleRepository(IOptions<Settings> options) : base(options)
        {
        }
    }
}
