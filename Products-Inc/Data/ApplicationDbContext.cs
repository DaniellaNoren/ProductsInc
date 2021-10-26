using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Products_Inc.Models;
using Microsoft.AspNetCore.Identity;

namespace Products_Inc.Data
{

    public class ApplicationDbContext : DbContext
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
                .WithMany(o => o.Products)
                .HasForeignKey(op => op.OrderId);

            modelBuilder.Entity<ShoppingCartProduct>().HasKey(scp => scp.ShoppingCartProductId);

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
            Product banana = new Product() { ProductId = 10, ProductName = "Pack of bananas", ProductDescription = "A nice eko quality bananas from peru.", ProductPrice = 34 };
            Product satsumas = new Product() { ProductId = 20, ProductName = "Satsumas", ProductDescription = "Clementine fruit.", ProductPrice = 6 };
            Product tomatos = new Product() { ProductId = 30, ProductName = "Tomatos A-Class", ProductDescription = "Sweet tomatos.", ProductPrice = 3 };
            Product sunflowerbutter = new Product() { ProductId = 40, ProductName = "Sunflower Butter", ProductDescription = "Butter made of sunflower seeds.", ProductPrice = 54 };

            modelBuilder.Entity<Product>().HasData(banana, satsumas, tomatos, sunflowerbutter);
            // -----------------------------------------



            // --- Seeding with orders

            //List<Product> listA_OfProductsInOrder[] { satsumas, banana, banana, banana, sunflowerbutter}.ToList();
            //List<Product> listB_OfProductsInOrder[] { satsumas, tomatos, banana, tomatos, tomatos}.ToList;


            modelBuilder.Entity<Order>().HasData(
                new Order { OrderId = 1, UserId = "0030" },
                new Order { OrderId = 2, UserId = "0010" },
                new Order { OrderId = 3, UserId = "0020" },
                new Order { OrderId = 4, UserId = "0020" }
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





            // ---------------------------------------

        }
    }


}
