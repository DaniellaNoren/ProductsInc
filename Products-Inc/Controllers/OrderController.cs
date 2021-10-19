using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Products_Inc.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Controllers
{
    public class OrderController : Controller
    {
        private readonly ILogger<OrderController> _logger;

        public OrderController(ILogger<OrderController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        /*[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ProductsViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }*/
    }
}


/*
 
 
  [HttpPOST]
C - Createproduct createproductmodel
return view with the created product


R -  GET all products from db. and put that info into List<products> in ProductsViewModel
return view all products


U - get 1 product to view and edit. 
When pressing save /submit button goto PUT/PAtch.

 
U - PUT/Patch
Edit product find by ID
return partial view, viewmodel 



D - Hide/exclude product from being viewed






 
 
 
 
 
 
 
 
 
 
 */