using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.Services;
using Products_Inc.Models.ViewModels;

namespace Products_Inc.Models.Interfaces
{
    public interface IShoppingCartService
    {
        ShoppingCartViewModel Create(CreateShoppingCartViewModel createShoppingCartViewModel);

        List<ShoppingCartViewModel> ReadAll();
        List<ShoppingCartViewModel> FindAllBy(int userid);

        ShoppingCartViewModel FindBy(int id);

        void AddProduct(int productId, int shoppingCartId);
        ShoppingCartViewModel Update(int id, ShoppingCart shoppingCart);

        bool Delete(int id);

    }
}
