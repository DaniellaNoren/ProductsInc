using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Products_Inc.Models;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Diagnostics;
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

        [HttpPost("[controller]/login")]
        public async Task<ActionResult> Login([FromBody] LoginModel loginModel)
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
        public async Task<ActionResult> Register([FromBody] RegisterModel registerModel)
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
        public IActionResult Logout()
        {
            _userService.Logout();
            return new OkResult();

        }

        [HttpPut("[controller]/{userId}")]
        public async Task<IActionResult> EditUser(string userId, [FromBody] RegisterModel updateModel)
        {
            UserViewModel user = await _userService.Update(userId, updateModel);
           
            
            return new OkObjectResult(user);
        }

        [Authorize(Roles = "User")]
        [HttpGet("[controller]/me")]
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


    }
}