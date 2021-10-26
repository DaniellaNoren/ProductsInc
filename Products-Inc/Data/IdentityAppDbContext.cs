using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Products_Inc.Models;
using Microsoft.AspNetCore.Identity;

namespace Products_Inc.Data
{
    public class IdentityAppDbContext : IdentityDbContext<User>
    {
        public IdentityAppDbContext(DbContextOptions<IdentityAppDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);






            // ____________ SEEDING SECTION ____________

            IdentityRole roleAdmin = new IdentityRole()
            {
                Id = "438db5c8-0513-43a0-a84c-cd416c4e3a54",
                Name = "Admin",
                NormalizedName = "ADMIN"
            };
            IdentityRole roleUser = new IdentityRole()
            {
                Id = "0948bea6-fb82-49c9-8cd8-fec213fe8e8a",
                Name = "User",
                NormalizedName = "USER"
            };

            builder.Entity<IdentityRole>().HasData(
              roleAdmin, roleUser);




            // ---------  Seeding Users  ----------

            //hash the password before storing in db
            var hashit = new PasswordHasher<IdentityUser>();

            builder.Entity<IdentityUser>().HasData(
                new IdentityUser
                {
                    Id = "0001", // primary key
                    UserName = "Admin",
                    NormalizedUserName = "ADMIN",
                    PasswordHash = hashit.HashPassword(null, "Admin")
                },
                new IdentityUser
                {
                    Id = "0010", // primary key
                    UserName = "customer1",
                    NormalizedUserName = "CUSTOMER1",
                    PasswordHash = hashit.HashPassword(null, "customer1")
                },
                new IdentityUser
                {
                    Id = "0020", // primary key
                    UserName = "customer2",
                    NormalizedUserName = "CUSTOMER2",
                    PasswordHash = hashit.HashPassword(null, "customer2")
                },
                new IdentityUser
                {
                    Id = "0030", // primary key
                    UserName = "customer3",
                    NormalizedUserName = "CUSTOMER3",
                    PasswordHash = hashit.HashPassword(null, "customer3")
                }
            );



        }

    }



}

