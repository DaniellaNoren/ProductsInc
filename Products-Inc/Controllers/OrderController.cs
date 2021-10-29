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
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
      
        private readonly IOrderService _orderService;

        public OrderController(IOrderService iOrderService)
        {
            _orderService = iOrderService;

        }

        [HttpPost]
        public IActionResult CreateOrder([FromBody] CreateOrderViewModel createOrderViewModel)
        {
            if (ModelState.IsValid)
            {
                return new OkObjectResult(_orderService.Create(createOrderViewModel));

            }
            return new BadRequestObjectResult(new { msg = "Invalid body" });
        }

        //[Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult GetAllOrders()
        {
            return new OkObjectResult(_orderService.ReadAll());
        }

        //[Authorize(Roles = "Admin, User")]
        [HttpGet("users/{userid}")]
        public IActionResult GetUserOrders(string userid)
        {
           //todo: check that the user requesting the orders is the owner 
            return new OkObjectResult(_orderService.FindAllBy(userid));
        }


       
    }
}

 
 