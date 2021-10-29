using Products_Inc.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Products_Inc.Data
{
    public interface IUserRepo
    {
        List<User> GetAllUsers();
    }
}