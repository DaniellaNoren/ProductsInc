using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;

namespace Products_Inc.Data
{
    public class DbOrderRepo : IOrderRepo
    {
        private readonly ApplicationDbContext _orderListContext;

        public DbOrderRepo(ApplicationDbContext orderListContext)
        {
            _orderListContext = orderListContext;

        }


        public Order Create(CreateOrderViewModel createOrderViewModel)
        {
            Order newOrder = new Order(createOrderViewModel.OrderId, createOrderViewModel.UserId);

            _orderListContext.Add(newOrder);
            _orderListContext.SaveChanges();

            return newOrder;
        }

        /*public bool AddLanguageToPerson(PersonLanguageViewModel personLanguageViewModel)
        {
            int nrStates;

            Order updatePersonLang = _peopleListContext.People // load person with languages
                .Where(c => c.PersonId == personLanguageViewModel.PersonId)
                .Include(f => f.PersonLanguages)
                .ThenInclude(g => g.Language)
                .First();

            List<Language> dbLangList = _peopleListContext.Languages.ToList();

            Language foundLang = new Language();

            // Make new list of PersonLanguage associated with that PersonId above.
            // And make the correct object-path build.   Person.List<PersonLanguage>.PersonLanguage.Language 
            List<PersonLanguage> addPersonLang = new List<PersonLanguage> { };

                    foreach (string id in personLanguageViewModel.SelectedListBoxView)
                 {
                    foundLang = dbLangList.Find(la => la.LanguageId == Convert.ToInt32(id));
                    PersonLanguage personLanguage = new PersonLanguage() { Language = foundLang };
                    addPersonLang.Add(personLanguage);
                 }

                updatePersonLang.PersonLanguages = addPersonLang;


            nrStates =_peopleListContext.SaveChanges();

            if (nrStates > 0)
            {
                return true;
            }

            return false;
        }*/
        


        public List<Order> Read()
        {
            List<Order> pList = _orderListContext.Orders
                .Include(f => f.OrderProducts).ThenInclude(g => g.Product)
                .ToList();

            return pList;
        }

        public Order Read(int id)
        {
            Order order = _orderListContext.Orders
                .Where(c => c.OrderId == id)
                .Include(f => f.OrderProducts).ThenInclude(g => g.Product)
                .FirstOrDefault();

            return order;
        }

        public Order Update(Order order)
        {
            _orderListContext.Orders.Update(order);
            _orderListContext.SaveChanges();

            return order;
        }

        public bool Delete(Order order)
        {
            int nrStates;

            _orderListContext.Orders.Remove(order);
            nrStates = _orderListContext.SaveChanges();

            if (nrStates > 0)
            {
                return true;
            }

            return false;


        }

    }
}
