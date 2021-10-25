using Microsoft.AspNetCore.Mvc;
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

        public ShoppingCartController(IShoppingCartService service)
        {
            _service = service;
        }
        
        [HttpPost]
        public IActionResult PostShoppingCart([FromBody] CreateShoppingCartViewModel createShoppingCartViewModel)
        {
            if (ModelState.IsValid)
            {
                return new CreatedAtRouteResult("/api/shoppingcart", _service.Create(createShoppingCartViewModel));
            }

            return new BadRequestResult();
        }

    }
}
