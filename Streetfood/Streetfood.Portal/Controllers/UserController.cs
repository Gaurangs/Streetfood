using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Streetfood.Corelib;
using Streetfood.Corelib.Repository;
using Microsoft.Extensions.Options;
using Streetfood.Portal.ViewModel;

namespace Streetfood.Portal.Controllers
{
    //[Produces("application/json")]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IUserRepository userRepository;

        public UserController(IOptions<Settings> options)
        {
            userRepository = new UserRepository(options);
        }

        [HttpPost]
        [Route("authenticate")]
        public IActionResult Authenticate([FromBody]UserViewModel user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userResp = userRepository.Authenticate(user.username, user.password).Count > 0;            
            return Json(userResp);
        }

        [HttpPost]
        [Route("insertuser")]
        public void InsertUser([FromBody]mt_Core_User user)
        {
            userRepository.Insert(user);
        }
    }
}
