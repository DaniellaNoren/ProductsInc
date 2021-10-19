using Microsoft.AspNetCore.Identity;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Models.Services
{
    public class UserService : IUserService
    {
        private static UserManager<User> _userManager;
        private static SignInManager<User> _signInManager;
        private static RoleManager<IdentityRole> _roleManager;
        public UserService(SignInManager<User> signInManager, RoleManager<IdentityRole> roleManager, UserManager<User> userManager)
        {

            _signInManager = signInManager;
            _userManager = userManager;
            _roleManager = roleManager;
        }


        public async Task<UserViewModel> Add(RegisterModel registerModel)
        {
            User createdUser;

            if (registerModel.Password.Equals(registerModel.ConfirmPassword))
            {
                createdUser = new User() { Email = registerModel.Email, NormalizedEmail = registerModel.Email.ToUpper(), UserName = registerModel.UserName, NormalizedUserName = registerModel.UserName.ToUpper() };

            }
            else
            {
                throw new Exception();
            }

            IdentityResult result =  _userManager.CreateAsync(createdUser, registerModel.Password).Result;

            if (result.Succeeded)
            {
               await AddRole(registerModel.UserName, "User");
            }
            else
            {
                string errorMsgs = "";
                foreach (IdentityError error in result.Errors)
                {
                    errorMsgs += error.Description + ", ";
                }

                throw new Exception(errorMsgs);
            }

            return new UserViewModel() { };
        }

        public async Task<bool> AddRole(string userName, string role)
        {
            User user = await _userManager.FindByNameAsync(userName);

            if (user != null)
            {
                if (!_roleManager.RoleExistsAsync(role).Result)
                {
                    await _roleManager.CreateAsync(new IdentityRole(role));
                }

                if (!_userManager.AddToRoleAsync(user, role.ToUpper()).Result.Succeeded)
                {
                    throw new Exception("Role could not be added to user");
                }

            }
            else
            {
                throw new Exception("User not found");
            }

            return true;
        }

        public async Task<List<UserViewModel>> All()
        {
            return _userManager.Users.Select(u => new UserViewModel()).ToList();
        }

        public Task<UserViewModel> Edit(string id, User person)
        {
            throw new NotImplementedException();
        }

        public Task<UserViewModel> FindBy(string userName)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Login(LoginModel login)
        {
            User user = await _userManager.FindByNameAsync(login.UserName);  

            if (user != null)
            {
                var signInResult = _signInManager.PasswordSignInAsync(user, login.Password, login.RememberMe, false);
                return signInResult.Result.Succeeded;
            }

            return false;
        }

        public async void Logout()
        {
            await _signInManager.SignOutAsync();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }

    }
}
