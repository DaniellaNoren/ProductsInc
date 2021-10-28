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
            ShoppingCart editedShoppingCart = _repo.AddProduct(productId, Int32.Parse(shoppingCartId));
            return new ShoppingCartViewModel() { ShoppingCartId = editedShoppingCart.ShoppingCartId.ToString(),
                Products = editedShoppingCart.Products.Select(p => new ShoppingCartProductViewModel()
                { Product = new ProductViewModel() { ImgPath = p.Product.ImgPath, ProductDescription = p.Product.ProductDescription,
                ProductId = p.ProductId, ProductName = p.Product.ProductName, ProductPrice = p.Product.ProductPrice },
                Amount = p.Amount, ShoppingCartId = p.ShoppingCartId, ProductId = p.ProductId }).ToList(), Id = editedShoppingCart.Id };

        }

        public ShoppingCartViewModel Create(CreateShoppingCartViewModel shoppingCartViewModel)
        {
            ShoppingCart createdShoppingCart = new ShoppingCart()
            {
                Active = true,
                TransactionComplete = shoppingCartViewModel.TransactionComplete,
                Id = shoppingCartViewModel.Id,
                Products = shoppingCartViewModel.Products.Select(p => new ShoppingCartProduct() { ProductId = p.ProductId, Amount = p.Amount }).ToList()
            };

            createdShoppingCart = _repo.Create(createdShoppingCart);
            return GetModel(createdShoppingCart);
        }

        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }

        public OrderViewModel CreateOrder(ShoppingCartViewModel shoppingCartModel)
        {
            ShoppingCart shoppingCart = _repo.Read(Int32.Parse(shoppingCartModel.ShoppingCartId));

            CreateOrderViewModel order = new CreateOrderViewModel() { Products = shoppingCart.Products.Select(p => new OrderProductViewModel()
            { ProductViewModel = new ProductViewModel() { ProductDescription = p.Product.ProductDescription, ProductId = p.Product.ProductId,
            ImgPath = p.Product.ImgPath, ProductName = p.Product.ProductName, ProductPrice = p.Product.ProductPrice },
            Amount = p.Amount }).ToList(), Id = shoppingCart.Id
            };

            OrderViewModel createdOrder = _orderService.Create(order);

            shoppingCart.Active = false;
            shoppingCart.TransactionComplete = true;

            Update(shoppingCart.ShoppingCartId, shoppingCart);

            return createdOrder;
        }
        public ShoppingCartViewModel FindActiveBy(string userId)
        {
            ShoppingCart shoppingCart =_repo.ReadActiveByUser(userId);

            if(shoppingCart == null)
            {
                throw new Exception();
            }
            return GetModel(shoppingCart);
        }

        public List<ShoppingCartViewModel> FindAllBy(string userId)
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

            return GetModel(shoppingCart);

        }

        public ShoppingCartViewModel GetModel(ShoppingCart shoppingCart)
        {
            return new ShoppingCartViewModel()
            {
                ShoppingCartId = shoppingCart.ShoppingCartId.ToString(),
                Products = shoppingCart.Products.Select(p =>
                new ShoppingCartProductViewModel()
                {
                    Product = new ProductViewModel()
                    {
                        ImgPath = p.Product.ImgPath,
                        ProductDescription = p.Product.ProductDescription,
                        ProductId = p.ProductId,
                        ProductName = p.Product.ProductName,
                        ProductPrice = p.Product.ProductPrice
                    },
                    Amount = p.Amount,
                    ProductId = p.ProductId,
                    ShoppingCartId = shoppingCart.ShoppingCartId
                }).ToList(),
                Id = shoppingCart.Id
            };
        }
    }
}
