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

namespace Products_Inc.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductService _productService;


        public ProductController(IProductService iProductService)
        {
            _productService = iProductService;

        }

        [Authorize]
        [HttpGet]
        public IActionResult Index()
        {
            return View("Index");
        }







        [Authorize(Roles = "Admin")]
        [HttpPost("[controller]/CreateProduct")]
        public IActionResult CreateProduct([FromBody] CreateProductViewModel createProductViewModel)
        {


            try
            {
                if (ModelState.IsValid)
                {
                    Product createdProduct = _productService.Create(createProductViewModel);

                    return new OkObjectResult(createdProduct);

                    //return Json(createPersonViewModel);
                }
            }
            catch (DataException)
            {
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }

            //return Json(createPersonViewModel);
            return new NotFoundResult();
        }




        [Authorize(Roles = "Admin, User")]
        [HttpPost]
        public IActionResult DeletePerson(int id)
        {
            bool success = _productService.Delete(id);

            if (success)
            {
                return new OkResult();
            }

            return new NotFoundResult();
        }


        /*
        [Authorize(Roles = "Admin, User")]
        [HttpPost]
        public IActionResult AddLanguageView(int id)
        {
            PersonLanguageViewModel personLanguageViewModel = new PersonLanguageViewModel()
            {
                LanguageListView = _languageService.All().LanguageListView,
                Person = _peopleService.FindBy(id)
            };

            //personLanguageViewModel = GenerateSelectList(personLanguageViewModel);
            //personLanguageViewModel.LanguageListView = _languageService.All().LanguageListView;
            //personLanguageViewModel.Person = foundPerson;

            return View("AddLanguagesToPerson", personLanguageViewModel);
        }


        [Authorize(Roles = "Admin, User")]
        public IActionResult AddLanguageToPerson(PersonLanguageViewModel personLanguageViewModel)
        {
            Person person = _peopleService.FindBy(personLanguageViewModel.PersonId);

            personLanguageViewModel.LanguageListView = _languageService.All().LanguageListView;
            personLanguageViewModel.Person = person;

            //personLanguageViewModel = GenerateSelectList(personLanguageViewModel);


            if (ModelState.IsValid)
            {
                bool success = _peopleService.AddLanguageToPerson(personLanguageViewModel);

                if (success) { ViewBag.Mess = "Languages added to Person!"; }
                else { ViewBag.Mess = "Error! Language did NOT get stored"; }

                return View("AddLanguagesToPerson", personLanguageViewModel);
            }

            return View("AddLanguagesToPerson", personLanguageViewModel);
        }
        */





        public IActionResult AccessDenied()
        {
            return View();
        }


        // -------------   Reactjsapi Json route ----------------------

        [Route("Reactjsonpersonlist")] // Building Personlist to Json API
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult PersonsList()
        {
            _listOfPersons = _productService.ReadAll().PeopleListView;
            return Json(_listOfPersons);
        }

        [Route("Reactjsoncitylist")] // Building Personlist to Json API
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult CityList()
        {
            _listOfCities = _productService.ReadAll().CityListView;
            return Json(_listOfCities);
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








    }
}