using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Products_Inc.Models;

namespace Products_Inc.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        
    }




    public class PeopleDbContext : DbContext
    {
        public PeopleDbContext(DbContextOptions<PeopleDbContext> options) : base(options)
        { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }





        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);



            // Setting up the join-table for the mutual many-to-many bind/relationship
            modelBuilder.Entity<OrderProduct>()  // EF Core 3.x specific. Join table /ER
                .HasKey(pl => new { pl.OrderId, pl.ProductId });

            modelBuilder.Entity<OrderProduct>() // One to Many
                .HasOne(om => om.Order)
                .WithMany(wm => wm.OrderProducts)
                .HasForeignKey(om => om.OrderId);

            modelBuilder.Entity<OrderProduct>()  // One to Many
                .HasOne(om => om.Product)
                .WithMany(wm => wm.OrderProducts)
                .HasForeignKey(om => om.ProductId);

        }



    }
}
