using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Products_Inc.Models;
using Microsoft.AspNetCore.Identity;

namespace Products_Inc.Data
{

    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }


        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }
        public DbSet<ShoppingCart> ShoppingCarts { get; set; }
        public DbSet<ShoppingCartProduct> ShoppingCartProducts { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            // Setting Primarykeys, instead of [Key] in code. One place to handle all of it /ER
            modelBuilder.Entity<Product>()
                .HasKey(mb => mb.ProductId);
            //.HasName("PrimaryKey_PersonId"); // for reference that i CAN change the name /ER

            modelBuilder.Entity<Order>()
                .HasKey(mb => mb.OrderId);

            modelBuilder.Entity<OrderProduct>().HasKey(op => op.OrderProductId);

            modelBuilder.Entity<OrderProduct>()
                .HasOne<Product>(op => op.Product)
                .WithMany()
                .HasForeignKey(op => op.ProductId);

            modelBuilder.Entity<OrderProduct>()
                .HasOne<Order>(op => op.Order)
                .WithMany(o => o.OrderProducts)
                .HasForeignKey(op => op.OrderId);


            modelBuilder.Entity<ShoppingCartProduct>().HasKey(scp => scp.ShoppingCartProductId);
            modelBuilder.Entity<ShoppingCart>().HasKey(sc => sc.ShoppingCartId);
            modelBuilder.Entity<ShoppingCart>().HasOne(sc => sc.User).WithMany().HasForeignKey(sc => sc.UserId);
            modelBuilder.Entity<ShoppingCartProduct>()
                .HasOne<ShoppingCart>(sp => sp.ShoppingCart)
                .WithMany(sc => sc.Products)
                .HasForeignKey(sp => sp.ShoppingCartId);


            modelBuilder.Entity<ShoppingCartProduct>()
             .HasOne<Product>(sp => sp.Product)
             .WithMany()
             .HasForeignKey(scp => scp.ProductId);




            // ____________ SEEDING SECTION ____________




            // Seeding db with start products

            modelBuilder.Entity<Product>().HasData(
            new Product() { ProductId = 10, ProductName = "Pack of bananas", ProductDescription = "A nice eko quality bananas from peru.", ProductPrice = 34 },
            new Product() { ProductId = 20, ProductName = "Satsumas", ProductDescription = "Clementine fruit.", ProductPrice = 6 },
            new Product() { ProductId = 30, ProductName = "Tomatos A-Class", ProductDescription = "Sweet tomatos.", ProductPrice = 3 },
            new Product() { ProductId = 40, ProductName = "Sunflower Butter", ProductDescription = "Butter made of sunflower seeds.", ProductPrice = 54 },

            new Product() { ProductId = 50, ProductName = "Orange", ProductDescription = "Nice for your health", ProductPrice = 30, ImgPath = "./img/img4.jpg" },
            new Product() { ProductId = 51, ProductName = "Coca Cola", ProductDescription = "Good to drink", ProductPrice = 16, ImgPath = "./img/img6.jpg" },
            new Product() { ProductId = 52, ProductName = "Oreo", ProductDescription = "Good for health", ProductPrice = 10, ImgPath = "./img/img7.jpg" },
            new Product() { ProductId = 53, ProductName = "Corn Flakes", ProductDescription = "Healthy breakfast", ProductPrice = 25, ImgPath = "./img/img8.jpg" },
            new Product() { ProductId = 54, ProductName = "Salt", ProductDescription = "Nice to make food", ProductPrice = 9, ImgPath = "./img/img9.jpg" },
            new Product() { ProductId = 55, ProductName = "Avocado", ProductDescription = "Good for health", ProductPrice = 18, ImgPath = "./img/img12.jpg" },
            new Product() { ProductId = 56, ProductName = "Eggo", ProductDescription = "Nice to eat", ProductPrice = 30, ImgPath = "./img/img14.jpg" },
            new Product() { ProductId = 57, ProductName = "SunButter", ProductDescription = "Creamy sun butter", ProductPrice = 35, ImgPath = "./img/img16.jpg" }
            );



            // -----------------------------------------



            // --- Seeding with orders

            //List<Product> listA_OfProductsInOrder[] { satsumas, banana, banana, banana, sunflowerbutter}.ToList();
            //List<Product> listB_OfProductsInOrder[] { satsumas, tomatos, banana, tomatos, tomatos}.ToList;


            modelBuilder.Entity<Order>().HasData(
                new Order { OrderId = 1, Id = "0030" },
                new Order { OrderId = 2, Id = "0010" },
                new Order { OrderId = 3, Id = "0020" },
                new Order { OrderId = 4, Id = "0020" }
            );


            modelBuilder.Entity<OrderProduct>().HasData(
                new OrderProduct { OrderProductId = 1, OrderId = 1, ProductId = 10 },
                new OrderProduct { OrderProductId = 2, OrderId = 1, ProductId = 10 },
                new OrderProduct { OrderProductId = 3, OrderId = 1, ProductId = 30 },
                new OrderProduct { OrderProductId = 4, OrderId = 1, ProductId = 40 },
                new OrderProduct { OrderProductId = 5, OrderId = 1, ProductId = 30 },
                new OrderProduct { OrderProductId = 6, OrderId = 1, ProductId = 20 },

                new OrderProduct { OrderProductId = 7, OrderId = 3, ProductId = 20 },
                new OrderProduct { OrderProductId = 8, OrderId = 3, ProductId = 30 },
                new OrderProduct { OrderProductId = 9, OrderId = 3, ProductId = 10 },
                new OrderProduct { OrderProductId = 10, OrderId = 3, ProductId = 10 },
                new OrderProduct { OrderProductId = 11, OrderId = 3, ProductId = 20 },
                new OrderProduct { OrderProductId = 12, OrderId = 3, ProductId = 30 }
            );



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

            modelBuilder.Entity<IdentityRole>().HasData(
              roleAdmin, roleUser);



            // ---------  Seeding Users  ----------

            //hash the password before storing in db
            var hashit = new PasswordHasher<User>();

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = "0001", // primary key
                    UserName = "Admin",
                    NormalizedUserName = "ADMIN",
                    PasswordHash = hashit.HashPassword(null, "Admin")
                },
                new User
                {
                    Id = "0010", // primary key
                    UserName = "customer1",
                    NormalizedUserName = "CUSTOMER1",
                    PasswordHash = hashit.HashPassword(null, "customer1")
                },
                new User
                {
                    Id = "0020", // primary key
                    UserName = "customer2",
                    NormalizedUserName = "CUSTOMER2",
                    PasswordHash = hashit.HashPassword(null, "customer2")
                },
                new User
                {
                    Id = "0030", // primary key
                    UserName = "customer3",
                    NormalizedUserName = "CUSTOMER3",
                    PasswordHash = hashit.HashPassword(null, "customer3")
                }
            );

            modelBuilder.Entity<IdentityUserRole<string>>().HasData(
               new IdentityUserRole<string>
               {
                   RoleId = roleAdmin.Id,
                   UserId = "0001"
               }
           ,
               new IdentityUserRole<string>
               {
                   RoleId = roleUser.Id,
                   UserId = "0001"
               },
               new IdentityUserRole<string>
               {
                   RoleId = roleUser.Id,
                   UserId = "0010"
               }
           ,
               new IdentityUserRole<string>
               {
                   RoleId = roleUser.Id,
                   UserId = "0020"
               }

           ,
               new IdentityUserRole<string>
               {
                   RoleId = roleUser.Id,
                   UserId = "0030"
               }
           );

            // ---------------------------------------

        }
    }


}
