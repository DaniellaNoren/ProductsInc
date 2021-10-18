using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.Services;
using Products_Inc.Models.ViewModels;

namespace Products_Inc.Models.Interfaces
{
    public interface IProductService
    {
        Product Create(CreateProductViewModel product);

        ProductViewModel ReadAll();

        ProductViewModel FindBy(ProductViewModel search);

        Product FindBy(int id);

        Product Update(int id, Product product);

        bool Delete(int id);

    }
}
