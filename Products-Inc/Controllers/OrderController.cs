using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.ViewModels;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.Services;
using Microsoft.AspNetCore.Authorization;

namespace Products_Inc.Controllers
{
    public class OrderController : Controller
    {
      
        private readonly IOrderService _orderService;

        public OrderController(IOrderService iOrderService)
        {
            _orderService = iOrderService;

        }

        [HttpPost("[controller]")]
        public IActionResult CreateOrder([FromBody] CreateOrderViewModel createOrderViewModel)
        {
            if (ModelState.IsValid)
            {
                return new OkObjectResult(_orderService.Create(createOrderViewModel));

            }
            return new BadRequestResult();
        }

        [Authorize(Roles = "Admin")]
        public IActionResult GetAllOrders()
        {
            return new OkObjectResult(_orderService.ReadAll());
        }

        [Authorize(Roles = "Admin, User")]
        [HttpGet("[controller]/users/{username}")]
        public IActionResult GetUserOrders(int username)
        {
            if (this.User.Identity.Name.Equals(username))
            {
                List<OrderViewModel> orders =_orderService.FindAllBy(username);
            }

            return new OkObjectResult("");
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

       
    }
}

 
 