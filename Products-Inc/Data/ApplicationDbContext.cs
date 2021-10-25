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



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Setting Primarykeys, instead of [Key] in code. One place to handle all of it /ER
            modelBuilder.Entity<Product>()
                .HasKey(mb => mb.ProductId);
            //.HasName("PrimaryKey_PersonId"); // for reference that i CAN change the name /ER

            modelBuilder.Entity<Order>()
                .HasKey(mb => mb.OrderId);


            // Setting up the join-table for the mutual many-to-many bind/relationship
            modelBuilder.Entity<OrderProduct>()  // EF Core 3.x specific. Join table
                .HasKey(pl => new { pl.ProductId, pl.OrderId });

            modelBuilder.Entity<OrderProduct>() // One to Many
                .HasOne(ec => ec.Product)
                .WithMany(e => e.OrderProducts)
                .HasForeignKey(ec => ec.ProductId);

            modelBuilder.Entity<OrderProduct>()  // One  to Many
                .HasOne(ec => ec.Order)
                .WithMany(c => c.OrderProducts)
                .HasForeignKey(ec => ec.OrderId);


            // Seeding db with start products
            Product banana = new Product() { ProductId = 10, ProductName = "Pack of bananas", ProductDescription = "A nice eko quality bananas from peru.", ProductPrice = 34 };
            Product satsumas = new Product() { ProductId = 20, ProductName = "Satsumas", ProductDescription = "Clementine fruit.", ProductPrice = 6 };
            Product tomatos = new Product() { ProductId = 30, ProductName = "Tomatos A-Class", ProductDescription = "Sweet tomatos.", ProductPrice = 3 };
            Product sunflowerbutter = new Product() { ProductId = 40, ProductName = "Sunflower Butter", ProductDescription = "Butter made of sunflower seeds.", ProductPrice = 54 };

            modelBuilder.Entity<Product>().HasData(banana, satsumas, tomatos, sunflowerbutter);

        }
    }


}
