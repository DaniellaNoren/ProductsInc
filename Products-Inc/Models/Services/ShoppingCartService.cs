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
        private readonly IOrderService _orderService;

        public ShoppingCartService(IShoppingCartRepo repo, IOrderService orderService)
        {
            this._repo = repo;
            this._orderService = orderService;
        }
        public ShoppingCartViewModel AddProduct(int productId, string shoppingCartId)
        {
            ShoppingCart editedShoppingCart = _repo.AddProduct(productId, shoppingCartId);
            return new ShoppingCartViewModel() { ShoppingCartId = editedShoppingCart.ShoppingCartId.ToString(), Products = editedShoppingCart.Products.Select(p => new ProductViewModel() { ImgPath = p.Product.ImgPath, ProductDescription = p.Product.ProductDescription, ProductId = p.ProductId, ProductName = p.Product.ProductName, ProductPrice = p.Product.ProductPrice }).ToList(), UserId = editedShoppingCart.UserId };

        }

        public ShoppingCartViewModel Create(CreateShoppingCartViewModel shoppingCartViewModel)
        {
            ShoppingCart createdShoppingCart = new ShoppingCart()
            {
                Active = true,
                TransactionComplete = shoppingCartViewModel.TransactionComplete,
                UserId = shoppingCartViewModel.UserId,
                Products = shoppingCartViewModel.ProductIds.Select(pid => new ShoppingCartProduct() { ProductId = pid }).ToList()
            };

            createdShoppingCart = _repo.Create(createdShoppingCart);

            return new ShoppingCartViewModel() { ShoppingCartId = createdShoppingCart.ShoppingCartId.ToString(), Products = createdShoppingCart.Products.Select(p => new ProductViewModel() { ImgPath = p.Product.ImgPath, ProductDescription = p.Product.ProductDescription, ProductId = p.ProductId, ProductName = p.Product.ProductName, ProductPrice = p.Product.ProductPrice }).ToList(), UserId = createdShoppingCart.UserId };
        }

        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }

        public OrderViewModel CreateOrder(ShoppingCartViewModel shoppingCartModel)
        {
            ShoppingCart shoppingCart = _repo.Read(shoppingCartModel.ShoppingCartId);

            CreateOrderViewModel order = new CreateOrderViewModel() { ProductIds = shoppingCart.Products.Select(p => p.ProductId).ToList(), UserId = shoppingCart.UserId };
            OrderViewModel createdOrder = _orderService.Create(order);

            shoppingCart.Active = false;
            shoppingCart.TransactionComplete = true;

            Update(shoppingCart.ShoppingCartId, shoppingCart);

            return createdOrder;
        }
        public ShoppingCartViewModel FindActiveBy(string userid)
        {
            ShoppingCart shoppingCart =_repo.ReadActiveByUser(userid);

            if(shoppingCart == null)
            {
                throw new Exception();
            }

            return new ShoppingCartViewModel() { ShoppingCartId = shoppingCart.ShoppingCartId.ToString(), Products = shoppingCart.Products.Select(p => new ProductViewModel() { ImgPath = p.Product.ImgPath, ProductDescription = p.Product.ProductDescription, ProductId = p.ProductId, ProductName = p.Product.ProductName, ProductPrice = p.Product.ProductPrice }).ToList(), UserId = shoppingCart.UserId };
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
            _repo.Update(shoppingCart);
            return new ShoppingCartViewModel() { ShoppingCartId = shoppingCart.ShoppingCartId.ToString(), Products = shoppingCart.Products.Select(p => new ProductViewModel() { ImgPath = p.Product.ImgPath, ProductDescription = p.Product.ProductDescription, ProductId = p.ProductId, ProductName = p.Product.ProductName, ProductPrice = p.Product.ProductPrice }).ToList(), UserId = shoppingCart.UserId };


        }
    }
}
