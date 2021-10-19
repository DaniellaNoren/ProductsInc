using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.ViewModels;

namespace Products_Inc.Models.Interfaces
{
    public interface IProductRepo
    {
        Product Create(string productName, string productDescription, int productPrice, string ImgPath);




        List<Product> Read();


        Product Read(int id);


        Product Update(Product person);


        bool Delete(Product person);
    }
}
