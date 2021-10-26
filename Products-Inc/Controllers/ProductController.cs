using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.ViewModels;
using Products_Inc.Models.Services;
using Products_Inc.Models.Interfaces;
using System.Data;
using Products_Inc.Models.Exceptions;

namespace Products_Inc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;

        public ProductController(IProductService iProductService)
        {
            _productService = iProductService;

        }


        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        [HttpGet]
        public IActionResult AllProducts()
        {
            return new OkObjectResult(_productService.ReadAll());
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetOne(int id)
        {
           return new OkObjectResult(_productService.FindBy(id));
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult CreateProduct([FromBody] CreateProductViewModel createProductViewModel)
        {
            if (ModelState.IsValid)
                {
                    ProductViewModel createdProduct = _productService.Create(createProductViewModel);

                    return new OkObjectResult(createdProduct);

            }
            else
            {
                return new BadRequestObjectResult(new { msg = "Invalid body" });
            }
          
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            bool success = _productService.Delete(id);

            if (success)
            {
                return new OkResult();
            }
            else
            {
                return new BadRequestObjectResult(new { msg = "Product not managed to be deleted. " });
            }

        }

       

    }
}