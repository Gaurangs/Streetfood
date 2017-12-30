using Streetfood.Corelib.ServerModels;
using Streetfood.Corelib.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Options;
using Streetfood.Corelib.MongoHelperclass;

namespace Streetfood.Corelib.Repository
{
    public class RoleRepository : MongoRepository<sf_Core_Roles>, IRoleRepository
    {
        public RoleRepository(IOptions<Settings> options) : base(options)
        {

        }        
    }
}
