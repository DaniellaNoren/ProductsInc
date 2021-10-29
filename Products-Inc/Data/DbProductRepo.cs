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


        public Product Create(CreateProductViewModel createProductViewModel)
            
        {
            Product createProduct = new Product(createProductViewModel.ProductName, createProductViewModel.ProductDescription,
            createProductViewModel.ProductPrice, createProductViewModel.ImgPath);

            _productListContext.Products.Add(createProduct);
            _productListContext.SaveChanges();

            return createProduct;
        }



  
        


        public List<Product> Read()
        {
            List<Product> pList = _productListContext.Products.ToList();

            return pList;
        }

        public Product Read(int id)
        {
            Product person = _productListContext.Products
                .Where(c => c.ProductId == id)
                .FirstOrDefault();

            return person;
        }

        public Product Update(Product person)
        {
            _productListContext.Products.Update(person);
            _productListContext.SaveChanges();

            return person;
        }

        public bool Delete(Product person)
        {
            int nrStates;

            _productListContext.Products.Remove(person);
            nrStates = _productListContext.SaveChanges();

            if (nrStates > 0)
            {
                return true;
            }

            return false;


        }

    }
}
