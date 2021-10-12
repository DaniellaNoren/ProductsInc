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
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
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
C - Create new user 
return view with the created product


R -  GET user info


U - get 1 user to view and edit. 
When pressing save /submit button goto PUT/PAtch.

 
U - PUT/Patch
Edit user find by ID
return partial view, viewmodel 



D - 






 
 
 
 
 
 
 
 
 
 
 */