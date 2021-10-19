using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;

namespace Products_Inc.Data
{
    public class DbProductRepo : IProductRepo
    {
        private readonly ApplicationDbContext _productListContext;

        public DbProductRepo(ApplicationDbContext productListContext)
        {
            _productListContext = productListContext;

        }


        public Product Create(string productName, string productDescription, int productPrice, string ImgPath)
        {
            Product createProduct = new Product(productName, productDescription, productPrice, ImgPath);

            _productListContext.Add(createProduct);
            _productListContext.SaveChanges();

            return createProduct;
        }



  
        


        public List<Product> Read()
        {
            
            
            List<Product> pList = _productListContext.Products
                .Include(d => d.City)
                .Include(e => e.City.Country)
                .Include(f => f.PersonLanguages).ThenInclude(g => g.Language)
                .ToList();

            return pList;
        }

        public Product Read(int id)
        {
            Product person = _peopleListContext.People
                .Where(c => c.PersonId == id)
                .Include(d => d.City)
                .Include(e => e.City.Country)
                .Include(f => f.PersonLanguages).ThenInclude(g => g.Language)
                .FirstOrDefault();

            return person;
        }

        public Product Update(Product person)
        {
            _peopleListContext.People.Update(person);
            _peopleListContext.SaveChanges();

            return person;
        }

        public bool Delete(Product person)
        {
            int nrStates;

            _peopleListContext.People.Remove(person);
            nrStates = _peopleListContext.SaveChanges();

            if (nrStates > 0)
            {
                return true;
            }

            return false;


        }

    }
}
