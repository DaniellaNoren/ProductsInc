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
        Product Create(string personName, string personPhoneNumber, City city);


        public bool AddLanguageToPerson(PersonLanguageViewModel personLanguageViewModel);


        List<Product> Read();


        Product Read(int id);


        Product Update(Product person);


        bool Delete(Product person);
    }
}
