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



        }
    }


}