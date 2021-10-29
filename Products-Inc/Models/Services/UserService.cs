using Microsoft.AspNetCore.Identity;
using Products_Inc.Models.Exceptions;
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

            IdentityResult result = _userManager.CreateAsync(createdUser, registerModel.Password).Result;

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

        public List<UserViewModel> All()
        {
            return _userManager.Users.Select(u => new UserViewModel()).ToList();
        }


        public async Task<UserViewModel> FindBy(string userName)
        {
            User user = await _userManager.FindByNameAsync(userName);

            if (user == null)
                throw new EntityNotFoundException("User with username " + userName + " not found.");

            return GetUserViewModel(user);
        }

        public async Task<UserViewModel> Login(LoginModel login)
        {
            User user = await _userManager.FindByNameAsync(login.UserName);
            
            if (user != null)
            {
                var signInResult = _signInManager.PasswordSignInAsync(user, login.Password, login.RememberMe, false);

                if (signInResult.Result.Succeeded)
                {
                    IList<string> roles = await _userManager.GetRolesAsync(user);
                    return GetUserViewModel(user, roles);
                }
                else
                {
                    throw new LoginException("Wrong username/password");
                }
            }

            throw new EntityNotFoundException("User with username " + login.UserName + " not found");
        }

        public async void Logout()
        {
            await _signInManager.SignOutAsync();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<UserViewModel> Update(string userId, RegisterModel updateModel)
        {
            User user = await _userManager.FindByIdAsync(Guid.Parse(userId).ToString());
            if (!string.IsNullOrEmpty(updateModel.Password) && !string.IsNullOrEmpty(updateModel.ConfirmPassword))
            {
                if (updateModel.Password.Equals(updateModel.ConfirmPassword))
                {
                    PasswordHasher<User> passwordHasher = new PasswordHasher<User>();
                    user.PasswordHash = passwordHasher.HashPassword(user, updateModel.Password);
                }
                else
                {
                    throw new UserUpdateException("Passwords do not match.");
                }
            }
            if (!string.IsNullOrEmpty(updateModel.Email))
            {
                user.Email = updateModel.Email;
                user.NormalizedEmail = updateModel.Email.ToUpper();
            }
            if (!string.IsNullOrEmpty(updateModel.UserName))
            {
                if(await _userManager.FindByNameAsync(updateModel.UserName) == null)
                {
                    user.UserName = updateModel.UserName;
                    user.NormalizedUserName = updateModel.UserName.ToUpper();
                }
                else
                {
                    throw new UserUpdateException("Username already taken.");
                }
            }

            await _userManager.UpdateAsync(user);
            await _signInManager.SignInAsync(user, true);
            return GetUserViewModel(user);
        }

        public UserViewModel GetUserViewModel(User user)
        {
            return new UserViewModel() { Id = user.Id, UserName = user.UserName, Email = user.Email };
        }

        public UserViewModel GetUserViewModel(User user, IList<string> roles)
        {
            return new UserViewModel() { Roles = roles, Id = user.Id, UserName = user.UserName, Email = user.Email };
        }
    }
}
