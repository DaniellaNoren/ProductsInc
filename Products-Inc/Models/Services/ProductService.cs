using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.ViewModels;
using Products_Inc.Models.Interfaces;

namespace Products_Inc.Models.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepo _productRepo;

        public ProductService(IProductRepo Repo)
        {
            _productRepo = Repo;
        }


        
        public Product Create(CreateProductViewModel product)
        {
            Product createdProduct = _productRepo.Create(product);

            return createdProduct;
        }



        public ProductViewModel ReadAll()
        {
            ProductViewModel pViewMod = new ProductViewModel()
            {
                ProductListView = _productRepo.Read(),
            };

            return pViewMod;
        }

        public Product Update(int id, Product product)
        {
            throw new NotImplementedException();
        }


        public ProductViewModel FindBy(ProductViewModel search)
        {
            search.ProductListView.Clear();

            List<Product> productList = _productRepo.Read();

            foreach (Product item in productList)
            {
                if (item.PersonName.Contains(search.FilterString, StringComparison.OrdinalIgnoreCase) ||
                    item.City.CityName.Contains(search.FilterString, StringComparison.OrdinalIgnoreCase) 
                    // item.PersonLanguages.LanguageName.Contains(search.FilterString, StringComparison.OrdinalIgnoreCase))
                {
                    search.PeopleListView.Add(item);
                }
            }

            if (search.PeopleListView.Count == 0)
            {
                search.SearchResultEmpty = $"No Person or City could be found, matching \"{search.FilterString}\" ";
            } else
            {
                search.SearchResultEmpty = "";
            }

            return search;

        }

        public Product FindBy(int id)
        {
            Product foundProduct = _productRepo.Read(id);

            return foundProduct;
        }

        public bool Delete(int id)
        {
            Product personToDelete = _productRepo.Read(id);

            if(productToDelete != null)
            {
                bool success = _productRepo.Delete(productToDelete);

                return success;
            }

            return false;
        }

        public void CreateBaseProducts(List<City> cities)
        {
            _productRepo.Create("Eric Rönnhult", "0777 777777", cities[0]);
            _productRepo.Create("Bosse Bus", "0777 777777", cities[1]);
            _productRepo.Create("Kjell Kriminell", "0777 777777", cities[2]);
            _productRepo.Create("Anders Rolle", "0777 777777", cities[3]);

        }


    }

}
