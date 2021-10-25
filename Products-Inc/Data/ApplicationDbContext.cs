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

            modelBuilder.Entity<OrderProduct>()
                .HasOne<Product>(op => op.Product)
                .WithMany(p => p.OrderProducts)
                .HasForeignKey(op => op.ProductId);


            /* Setting up One-to-Many
            modelBuilder.Entity<Person>()
                 .HasOne(mbo => mbo.City);

            modelBuilder.Entity<City>()
                 .HasMany(mbm => mbm.People);

            modelBuilder.Entity<City>()
                .HasOne(mbo => mbo.Country);

            modelBuilder.Entity<Country>()
                .HasMany(mbm => mbm.Cities);

            */



            // Setting up the join-table for the mutual many-to-many bind/relationship
            modelBuilder.Entity<OrderProduct>()  // EF Core 3.x specific. Join table
                .HasKey(pl => new { pl.ProductId, pl.OrderId });

            modelBuilder.Entity<OrderProduct>() // One to Many
                .HasOne(ec => ec.Product)
                .WithMany(e => e.OrderProducts)
                .HasForeignKey(ec => ec.OrderId);

            modelBuilder.Entity<OrderProduct>()  // One  to Many
                .HasOne(ec => ec.Order)
                .WithMany(c => c.OrderProducts)
                .HasForeignKey(ec => ec.ProductId);

        }
    }


}
