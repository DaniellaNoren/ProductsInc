using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Products_Inc.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ShoppingCartController : Controller
    {
        private readonly IShoppingCartService _service;
        private readonly IUserService _userService;
        private readonly IProductService _productService;

        public ShoppingCartController(IProductService _productService, IShoppingCartService service, IUserService userService)
        {
            _service = service;
            _userService = userService;
            this._productService = _productService;
        }


        [Authorize(Roles = "User")]
        [HttpPost("buy")]
        public async Task<IActionResult> GetOrder(ShoppingCartViewModel shoppingCart)
        {
            if (string.IsNullOrEmpty(shoppingCart.ShoppingCartId))
            {
                shoppingCart = _service.Create(await GetCreateShoppingCartModel(shoppingCart));
            }
            if (string.IsNullOrEmpty(shoppingCart.UserId))
            {

            }

            OrderViewModel order = _service.CreateOrder(shoppingCart);

            if (this.Request.Cookies["shopping-cart"] != null)
            {
                this.Response.Cookies.Delete("shopping-cart");
            }

            return new OkObjectResult(order);
        }

        [HttpGet("users")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetShoppingCart()
        {
            if (this.User.Identity.IsAuthenticated)
            {
                var user = await _userService.FindBy(this.User.Identity.Name);
                ShoppingCartViewModel shoppingCart = _service.FindActiveBy(user.Id);
                this.Response.Cookies.Append("shopping-cart", JsonConvert.SerializeObject(shoppingCart));
                return new OkObjectResult(shoppingCart);
            }
            else
            {
                return new UnauthorizedResult();
            }
        }

        private ShoppingCartViewModel TryGetCookie()
        {
            try
            {
                return JsonConvert.DeserializeObject<ShoppingCartViewModel>(this.Request.Cookies["shopping-cart"], new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore
                });
            }
            catch (JsonException)
            {
                return new ShoppingCartViewModel() { Products = new List<ShoppingCartProductViewModel>() };
            }
        }

        private void TryAppendCookie(ShoppingCartViewModel shoppingCart)
        {
            this.Response.Cookies.Append("shopping-cart", JsonConvert.SerializeObject(shoppingCart));
        }

        [Authorize(Roles = "User")]
        [HttpPost]
        public async Task<IActionResult> PostShoppingCart([FromBody] ShoppingCartViewModel shoppingCartViewModel)
        {
            if (ModelState.IsValid)
            {
                ShoppingCartViewModel shoppingCart = _service.Create(await GetCreateShoppingCartModel(shoppingCartViewModel));
                TryAppendCookie(shoppingCart);

                return new CreatedAtRouteResult("/api/shoppingcart", shoppingCart);

            }

            return new BadRequestObjectResult(new { msg = "Invalid body." });
        }

        private async Task<CreateShoppingCartViewModel> GetCreateShoppingCartModel(ShoppingCartProductViewModel product)
        {
            CreateShoppingCartViewModel createShoppingCart = new CreateShoppingCartViewModel();
            createShoppingCart.AddProduct(product);
            UserViewModel user = await _userService.FindBy(User.Identity.Name);
            createShoppingCart.UserId = user.Id;
            return createShoppingCart;
        }

        private async Task<CreateShoppingCartViewModel> GetCreateShoppingCartModel(ShoppingCartViewModel cart)
        {
            CreateShoppingCartViewModel createShoppingCart = new CreateShoppingCartViewModel();
            foreach(ShoppingCartProductViewModel product in cart.Products)
            {
                createShoppingCart.AddProduct(product);
            }

            UserViewModel user = await _userService.FindBy(User.Identity.Name);
            createShoppingCart.UserId = user.Id;
            return createShoppingCart;
        }

        [HttpPost("products")]
        public async Task<IActionResult> AddProduct(ShoppingCartProductViewModel product)
        {

            ShoppingCartViewModel shoppingCart;

            if (ModelState.IsValid)
            {

                if (this.Request.Cookies["shopping-cart"] == null || string.IsNullOrEmpty(this.Request.Cookies["shopping-cart"]))
                {

                    if (User.Identity.IsAuthenticated)
                    {

                        shoppingCart = _service.Create(await GetCreateShoppingCartModel(product));
                    }
                    else
                    {
                        _productService.FindBy(product.ProductId);
                        shoppingCart = new ShoppingCartViewModel() { Products = new List<ShoppingCartProductViewModel>() { product } };
                    }

                    TryAppendCookie(shoppingCart);
                }
                else
                {
                    shoppingCart = JsonConvert.DeserializeObject<ShoppingCartViewModel>(this.Request.Cookies["shopping-cart"], new JsonSerializerSettings
                    {
                        NullValueHandling = NullValueHandling.Ignore
                    });

                    if (this.User.Identity.IsAuthenticated)
                    {
                        if (string.IsNullOrEmpty(shoppingCart.ShoppingCartId))
                        {
                            CreateShoppingCartViewModel createShoppingCart = await GetCreateShoppingCartModel(product);
                            foreach (ShoppingCartProductViewModel pr in shoppingCart.Products)
                            {
                                createShoppingCart.AddProduct(pr);
                            }
                            shoppingCart = _service.Create(createShoppingCart);
                        }
                        else
                        {
                            shoppingCart = _service.AddProduct(product.ProductId, shoppingCart.ShoppingCartId);
                        }

                    }
                    else
                    {
                        _productService.FindBy(product.ProductId);
                        shoppingCart.AddProduct(product);
                    }

                    TryAppendCookie(shoppingCart);
                }


                return new OkObjectResult(shoppingCart);
            }
            return new BadRequestObjectResult(new { msg = "Invalid body, product-id missing." });
        }


    }
}
