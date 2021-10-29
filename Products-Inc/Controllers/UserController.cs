using Microsoft.AspNetCore.Authorization;
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
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;


        public UserController(IUserService userService, ILogger<UserController> logger)
        {
            _logger = logger;
            this._userService = userService;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                UserViewModel user = await _userService.Login(loginModel);

                return new OkObjectResult(user);
            }
            else
            {
                return new BadRequestObjectResult(new { errorMsg = "Incorrect model" });
            }
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] RegisterModel registerModel)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserViewModel userModel = await _userService.Add(registerModel);
                    return new CreatedResult("api/user/register", userModel);

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

        [HttpPut("{userId}")]
        public async Task<IActionResult> EditUser(string userId, [FromBody] RegisterModel updateModel)
        {
            UserViewModel user = await _userService.Update(userId, updateModel);
           
            
            return new OkObjectResult(user);
        }

        [Authorize(Roles = "User")]
        [HttpGet("me")]
        public async Task<IActionResult> GetLoggedInUserInfo()
        {
            if (User.Identity.IsAuthenticated)
            {
                UserViewModel user = await _userService.FindBy(User.Identity.Name);
                return new OkObjectResult(user);
            }
            else
            {
                return new UnauthorizedResult();
            }
        }






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