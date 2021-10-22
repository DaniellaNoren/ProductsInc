using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Products_Inc.Models;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingCartController : Controller
    {
        private readonly IShoppingCartService _service;
        private readonly IUserService _userService;

        public ShoppingCartController(IShoppingCartService service, IUserService userService)
        {
            _service = service;
            _userService = userService;
        }

        [HttpGet("buy")]
        public IActionResult GetOrder(ShoppingCartViewModel shoppingCart)
        {
            OrderViewModel order = _service.CreateOrder(shoppingCart);
            
            if (this.Request.Cookies["shopping-cart"] != null)
            {
                this.Response.Cookies.Delete("shopping-cart");
            }
            
            return new OkObjectResult(order);
        }

        [HttpGet("users/{userId}")]
        public IActionResult GetShoppingCart(string userId)
        {
            ShoppingCartViewModel shoppingCart = _service.FindActiveBy(userId);
            this.Response.Cookies.Append("shopping-cart", JsonConvert.SerializeObject(shoppingCart));
            return new OkObjectResult(shoppingCart);
        }

        [HttpPost]
        public IActionResult PostShoppingCart([FromBody] CreateShoppingCartViewModel createShoppingCartViewModel)
        {
            if (ModelState.IsValid)
            {
                ShoppingCartViewModel shoppingCart = _service.Create(createShoppingCartViewModel);
                this.Response.Cookies.Append("shopping-cart", shoppingCart.ToString());

                return new CreatedAtRouteResult("/api/shoppingcart", shoppingCart);

            }

            return new BadRequestResult();
        }

        [HttpPost("products")]
        public async Task<IActionResult> AddProduct(ProductViewModel product)
        {

            ShoppingCartViewModel shoppingCart;

            if (this.Request.Cookies["shopping-cart"] == null || string.IsNullOrEmpty(this.Request.Cookies["shopping-cart"]))
            {

            if (User.Identity.IsAuthenticated)
                {
                    CreateShoppingCartViewModel createShoppingCart = new CreateShoppingCartViewModel();
                    createShoppingCart.AddProductId(product.ProductId);
                    UserViewModel user = await _userService.FindBy(User.Identity.Name);
                    createShoppingCart.UserId = user.Id;
                    shoppingCart = _service.Create(createShoppingCart);
                    this.Response.Cookies.Append("shopping-cart", JsonConvert.SerializeObject(shoppingCart));
                }
                else
                {
                    shoppingCart = new ShoppingCartViewModel() { Products = new List<ProductViewModel>() { product } };
                    this.Response.Cookies.Append("shopping-cart", JsonConvert.SerializeObject(shoppingCart));
                }
            }
            else
            {
                shoppingCart = JsonConvert.DeserializeObject<ShoppingCartViewModel>(this.Request.Cookies["shopping-cart"], new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore
                });

                if (this.User.Identity.IsAuthenticated)
                {
                   
                   shoppingCart = _service.AddProduct(product.ProductId, shoppingCart.ShoppingCartId);
                }
                else
                {
                   shoppingCart.Products.Add(product);
                }

                this.Response.Cookies.Append("shopping-cart", JsonConvert.SerializeObject(shoppingCart));

            }


            return new OkObjectResult(shoppingCart);
        }

    }
}
