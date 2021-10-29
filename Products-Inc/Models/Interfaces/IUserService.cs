using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Products_Inc.Models.ViewModels;

namespace Products_Inc.Models.Interfaces
{
    public interface IUserService
    {
       Task<UserViewModel> Add(RegisterModel registerModel);

        List<UserViewModel> All();

        Task<UserViewModel> FindBy(string userName);

        bool Remove(int id);

        Task<bool> AddRole(string userName, string role);
        Task<UserViewModel> Login(LoginModel loginModel);

        void Logout();
        Task<UserViewModel> Update(string userId, RegisterModel updateModel);
    }
}
