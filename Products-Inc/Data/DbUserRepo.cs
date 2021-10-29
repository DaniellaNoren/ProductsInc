using Products_Inc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Data
{
    public class DbUserRepo : IUserRepo
    {
        private static ApplicationDbContext _context;

        public DbUserRepo(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }
    }
}
