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
       Task<UserViewModel> Add(RegisterModelCustom registerModel);

        List<UserViewModel> All();

        Task<UserViewModel> FindById(int id);

        Task<UserViewModel> FindBy(string userName);

        Task<UserViewModel> Edit(int id, User user);

        bool Remove(int id);

        Task<bool> AddRole(string userName, string role);
        Task<bool> Login(LoginModelCustom loginModel);

        void Logout();
        Task<UserViewModel> Update(string userId, RegisterModel updateModel);
    }
}
