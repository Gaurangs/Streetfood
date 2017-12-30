using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Streetfood.Corelib.Interface;
using Microsoft.Extensions.Options;
using Streetfood.Corelib.MongoHelperclass;
using Streetfood.Corelib.Repository.Repositories;
using Streetfood.Corelib.ServerModels;
using Streetfood.Portal.ViewModel;
using Streetfood.Corelib.Repository;
using Streetfood.Portal.Global;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Streetfood.Portal.Controllers
{
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        private IMenuRepository menuRepository;
        private IRoleRepository roleRepository;
        public MenuController(IOptions<Settings> options)
        {
            menuRepository = new MenuRepository(options);
            roleRepository = new RoleRepository(options);
        }

        [HttpGet]
        [Route("getallMenus")]
        public async Task<JsonResult> GetListAllMenus(string roleID = "")
        {
            try
            {                
                List<MenuViewModel> list = new List<MenuViewModel>();
                MenuViewModel _ObjResult = new MenuViewModel();
                string[] rolePermissionMenuId =  new string[200];
                sf_Core_Roles _Objroles = new sf_Core_Roles();

                if (!string.IsNullOrEmpty(roleID))
                {
                    _Objroles = roleRepository.Get(roleID).Result;
                    rolePermissionMenuId = Utility.CommaSepratedStringToList(_Objroles.RolePermissionMenus);
                }
                else
                {
                    _Objroles.RoleName = "";                    
                }
                _ObjResult.roles = _Objroles;
                _ObjResult.menu = menuRepository.GetAll().Result.
                Select(x => new MenuViewModel
                {
                    _id = x.Id,
                    menuName = x.menuName,
                    menuDescription = x.menuDescription,
                    isActive = rolePermissionMenuId.Contains(x.Id) ? true : false
                }).ToList();                
                return Json(_ObjResult);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
