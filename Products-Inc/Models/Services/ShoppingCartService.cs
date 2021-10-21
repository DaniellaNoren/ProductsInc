using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Models.Services
{
    public class ShoppingCartService : IShoppingCartService
    {
        private readonly IShoppingCartRepo _repo;

        public ShoppingCartService(IShoppingCartRepo repo)
        {
            this._repo = repo;
        }
        public void AddProduct(int productId, int shoppingCartId)
        {
            _repo.AddProduct(productId, shoppingCartId);
        }

        public ShoppingCartViewModel Create(CreateShoppingCartViewModel shoppingCartViewModel)
        {
            ShoppingCart createdShoppingCart = new ShoppingCart()
            {
                Products = shoppingCartViewModel.ProductIds.Select(pid => new ShoppingCartProduct() { ProductId = pid }).ToList()
            };

            createdShoppingCart = _repo.Create(createdShoppingCart);

            return new ShoppingCartViewModel() { ShoppingCartId = createdShoppingCart.Id.ToString(), Products = createdShoppingCart.Products.Select(p => new ProductViewModel() { ImgPath = p.Product.ImgPath, ProductDescription = p.Product.ProductDescription, ProductId = p.ProductId, ProductName = p.Product.ProductName, ProductPrice = p.Product.ProductPrice }).ToList(), UserId = createdShoppingCart.UserId.ToString() };
        }

        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<ShoppingCartViewModel> FindAllBy(int userid)
        {
            throw new NotImplementedException();
        }

        public ShoppingCartViewModel FindBy(int id)
        {
            throw new NotImplementedException();
        }

        public List<ShoppingCartViewModel> ReadAll()
        {
            throw new NotImplementedException();
        }

        public ShoppingCartViewModel Update(int id, ShoppingCart shoppingCart)
        {
            throw new NotImplementedException();
        }
    }
}
