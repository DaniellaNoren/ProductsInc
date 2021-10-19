using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.AspNetCore.Identity;
using Products_Inc.Models;

namespace Products_Inc.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

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
        }

    }




    //    public class PeopleDbContext : DbContext
    //    {
    //        public PeopleDbContext(DbContextOptions<PeopleDbContext> options) : base(options)
    //        { }

    //        public DbSet<User> Users { get; set; }
    //        /*public DbSet<Product> Products { get; set; }
    //        public DbSet<Country> Countries { get; set; }
    //        public DbSet<Language> Languages { get; set; }
    //        public DbSet<PersonLanguage> PersonLanguages { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //}

    //        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //        {
    //        }

/*
            // Setting Primarykeys, instead of [Key] in code. One place to handle all of it /ER
            modelBuilder.Entity<Person>()
                .HasKey(mb => mb.PersonId);
            //.HasName("PrimaryKey_PersonId"); // for reference that i CAN change the name /ER

            modelBuilder.Entity<City>()
                .HasKey(mb => mb.CityId);

            modelBuilder.Entity<Country>()
                .HasKey(mb => mb.CountryId);

            modelBuilder.Entity<Language>()
                .HasKey(mb => mb.LanguageId);


            modelBuilder.Entity<OrderProduct>() // One to Many
                .HasOne(om => om.Order)
                .WithMany(wm => wm.OrderProducts)
                .HasForeignKey(om => om.OrderId);

            modelBuilder.Entity<OrderProduct>()  // One to Many
                .HasOne(om => om.Product)
                .WithMany(wm => wm.OrderProducts)
                .HasForeignKey(om => om.ProductId);

            // Setting up One-to-Many
            modelBuilder.Entity<Person>()
                 .HasOne(mbo => mbo.City);

            modelBuilder.Entity<City>()
                 .HasMany(mbm => mbm.People);



            modelBuilder.Entity<City>()
                .HasOne(mbo => mbo.Country);

            modelBuilder.Entity<Country>()
                .HasMany(mbm => mbm.Cities);


            /*modelBuilder.Entity<Person>()
                 .HasMany(p => p.Languages);

            modelBuilder.Entity<Language>()
                 .HasMany(la => la.People);*/


/*
            // Setting up the join-table for the mutual many-to-many bind/relationship
            modelBuilder.Entity<PersonLanguage>()  // EF Core 3.x specific. Join table /ER
                .HasKey(pl => new { pl.PersonId, pl.LanguageId });

            modelBuilder.Entity<PersonLanguage>() // One Person to Many Languages
                .HasOne(ec => ec.Person)
                .WithMany(e => e.PersonLanguages)
                .HasForeignKey(ec => ec.PersonId);

            modelBuilder.Entity<PersonLanguage>()  // One Language to Many People
                .HasOne(ec => ec.Language)
                .WithMany(c => c.PersonLanguages)
                .HasForeignKey(ec => ec.LanguageId);
*/
        }



//        }
//}
