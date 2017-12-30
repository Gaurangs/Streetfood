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
using Streetfood.Corelib.ServerModels;
using Streetfood.Corelib.Interface;
using Streetfood.Corelib.MongoHelperclass;
using Streetfood.Corelib.Repository.Repositories;
using Streetfood.Portal.Global;

namespace Streetfood.Portal.Controllers
{
    //[Produces("application/json")]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IUserRepository userRepository;
        private IRoleRepository roleRepository;
        private IUserRoleRepository userRoleRepository;

        public UserController(IOptions<Settings> options)
        {
            userRepository = new UserRepository(options);
            roleRepository = new RoleRepository(options);
            userRoleRepository = new UserRoleRepository(options);
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
        public void InsertUser([FromBody]sf_Core_User user)
        {
            userRepository.Insert(user);
        }

        [HttpGet]
        [Route("getusers")]
        public IActionResult GetAllUsers()
        {
            try
            {
                var allUsers = userRepository.GetAll().Result.Where(x => x.IsActive = true).ToList();
                return Json(allUsers);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpGet]
        [Route("getallroles")]
        public async Task<JsonResult> GetRoles(string _SearchString = "")
        {
            ApiResponse response = new ApiResponse();
            try
            {
                List<RoleViewModel> result;
                 var resultData = roleRepository.GetAll().Result.ToList();
                if (!string.IsNullOrEmpty(_SearchString))
                {
                    resultData = resultData.Where(x => x.RoleName == _SearchString || x.RolePermissionMenus == _SearchString).ToList();
                }
                //response.result = result;
                //response.status = 1;
                result = resultData.Select(p => new RoleViewModel
                {
                    _id = p.Id,
                    RoleName = p.RoleName,
                    RolePermissionMenus = Utility.CommaSepratedStringToList(p.RolePermissionMenus),
                    IsActive = p.IsActive
                }).ToList();
                return Json(result);               
            }
            catch (Exception ex)
            {
                response.result = null;
                response.status = -1;
                response.statustext = "Please refine your search.";
                return Json(response);
            }
            //return Json(response);
        }


        [HttpPost]
        [Route("newrole")]
        public async Task<int> InsertNewRole([FromBody]RoleViewModel _Roles)
        {            
            try
            {
                sf_Core_Roles _Core_Roles = new sf_Core_Roles();
                _Core_Roles.RoleName = _Roles.RoleName;
                _Core_Roles.CreatedDate = DateTime.UtcNow;
                _Core_Roles.UpdatedDate = DateTime.UtcNow;                
                _Core_Roles.RolePermissionMenus = Utility.stringListToCommaSepratedString(_Roles.RolePermissionMenus);
                _Core_Roles.IsActive = _Roles.IsActive;
                await roleRepository.Insert(_Core_Roles);
                return 1;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
