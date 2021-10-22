using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Products_Inc.Models;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Controllers
{
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;

        public UserController(IUserService userService, ILogger<UserController> logger)
        {
            _logger = logger;
            this._userService = userService;
        }

        private RoleManager<IdentityRole> roleManager;
        private UserManager<User> userManager;
        public UserController(RoleManager<IdentityRole> roleMgr, UserManager<User> userMrg)
        {
            roleManager = roleMgr;
            userManager = userMrg;
        }

        [HttpPost("[controller]/login")]
        public async Task<ActionResult> Login([FromBody] LoginModelCustom loginModel)
        {
            if (ModelState.IsValid)
            {
                if (await _userService.Login(loginModel))
                {
                    return new OkObjectResult(new { msg = "Logged in" });
                }
                else
                {
                    return new BadRequestObjectResult(new { errorMsg = "Incorrect password/username" });
                }
            }
            else
            {
                return new BadRequestObjectResult(new { errorMsg = "Incorrect model" });
            }
        }

        [HttpPost("[controller]/register")]
        public async Task<ActionResult> Register([FromBody] RegisterModelCustom registerModel)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserViewModel userModel = await _userService.Add(registerModel);
                    return new CreatedResult("/user/register", userModel);

                }
                catch (Exception e)
                {
                    return new BadRequestObjectResult(new { errorMsg = e.Message });
                }
            }
            else
            {
                return new BadRequestObjectResult(new { errorMsg = "Incorrect model" });
            }
        }

        [HttpPost("[controller]/logout")]
        public async Task<ActionResult> Logout([FromBody] RegisterModelCustom registerModel)
        {
            _userService.Logout();
            return new OkResult();

        }

            public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }





        //private void Errors(IdentityResult result)
        //{
        //    foreach (IdentityError error in result.Errors)
        //        ModelState.AddModelError("", error.Description);
        //}


        //public IActionResult Create() => View("CreateRole");


        //[HttpPost]
        //public async Task<IActionResult> Create([Required] string name)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        IdentityResult result = await roleManager.CreateAsync(new IdentityRole(name));
        //        if (result.Succeeded)
        //            return RedirectToAction("Index");
        //        else
        //            Errors(result);
        //    }
        //    return View(name);
        //}


        //[HttpPost]
        //public async Task<IActionResult> Delete(string id)
        //{
        //    IdentityRole role = await roleManager.FindByIdAsync(id);
        //    if (role != null)
        //    {
        //        IdentityResult result = await roleManager.DeleteAsync(role);
        //        if (result.Succeeded)
        //            return RedirectToAction("Index");
        //        else
        //            Errors(result);
        //    }
        //    else
        //        ModelState.AddModelError("", "No role found");
        //    return View("Index", roleManager.Roles);
        //}


        //public async Task<IActionResult> Update(string id)
        //{
        //    IdentityRole role = await roleManager.FindByIdAsync(id);
        //    List<User> members = new List<User>();
        //    List<User> nonMembers = new List<User>();
        //    foreach (User user in userManager.Users)
        //    {
        //        var list = await userManager.IsInRoleAsync(user, role.Name) ? members : nonMembers;
        //        list.Add(user);
        //    }
        //    return View("UpdateRole", new IdentityRoleEdit
        //    {
        //        Role = role,
        //        Members = members,
        //        NonMembers = nonMembers
        //    });
        //}


        //[HttpPost]
        //public async Task<IActionResult> Update(IdentityRoleModification model)
        //{
        //    IdentityResult result;
        //    if (ModelState.IsValid)
        //    {
        //        foreach (string userId in model.AddIds ?? new string[] { })
        //        {
        //            User user = await userManager.FindByIdAsync(userId);
        //            if (user != null)
        //            {
        //                result = await userManager.AddToRoleAsync(user, model.RoleName);
        //                if (!result.Succeeded)
        //                    Errors(result);
        //            }
        //        }
        //        foreach (string userId in model.DeleteIds ?? new string[] { })
        //        {
        //            User user = await userManager.FindByIdAsync(userId);
        //            if (user != null)
        //            {
        //                result = await userManager.RemoveFromRoleAsync(user, model.RoleName);
        //                if (!result.Succeeded)
        //                    Errors(result);
        //            }
        //        }
        //    }

        //    if (ModelState.IsValid)
        //        return RedirectToAction(nameof(Index));
        //    else
        //        return await Update(model.RoleId);
        //}











        /*[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ProductsViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }*/
    }
}


/*
 
 
  [HttpPOST]
C - Create new user 
return view with the created product


R -  GET user info


U - get 1 user to view and edit. 
When pressing save /submit button goto PUT/PAtch.

 
U - PUT/Patch
Edit user find by ID
return partial view, viewmodel 



D - 






 
 
 
 
 
 
 
 
 
 
 */