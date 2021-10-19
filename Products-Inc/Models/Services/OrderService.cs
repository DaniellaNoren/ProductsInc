using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.ViewModels;
using Products_Inc.Models.Interfaces;

namespace Products_Inc.Models.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepo _orderRepo;

        public OrderService(IOrderRepo iOrderRepo)
        {
            _orderRepo = iOrderRepo;
        }


        
        public Order Create(CreateOrderViewModel createOrderViewModel)
        {
            Order createdOrder = _orderRepo.Create(createOrderViewModel);

            return createdOrder;
        }



        public OrderViewModel ReadAll()
        {
            OrderViewModel oViewMod = new OrderViewModel()
            {
                OrderListView = _orderRepo.Read(),
            };

            return oViewMod;
        }

        public Order Update(int id, Order product)
        {
            throw new NotImplementedException();
        }


        public OrderViewModel FindBy(OrderViewModel search)
        {
            search.OrderListView.Clear();

            List<Order> orderList = _orderRepo.Read();

            foreach (Order item in orderList)
            {
                if (item.OrderName.Contains(search.FilterString, StringComparison.OrdinalIgnoreCase)) //||
                    //item.City.CityName.Contains(search.FilterString, StringComparison.OrdinalIgnoreCase)) 
                    // item.PersonLanguages.LanguageName.Contains(search.FilterString, StringComparison.OrdinalIgnoreCase))
                {
                    search.OrderListView.Add(item);
                }
            }

            if (search.OrderListView.Count == 0)
            {
                search.SearchResultEmpty = $"No Order could be found, matching \"{search.FilterString}\" ";
            } else
            {
                search.SearchResultEmpty = "";
            }

            return search;

        }

        public Order FindBy(int id)
        {
            Order foundProduct = _orderRepo.Read(id);

            return foundProduct;
        }

        public bool Delete(int id)
        {
            Order orderToDelete = _orderRepo.Read(id);

            if(orderToDelete != null)
            {
                bool success = _orderRepo.Delete(orderToDelete);

                return success;
            }

            return false;
        }

        public void CreateBaseProducts(List<City> cities)
        {
            _orderRepo.Create("Eric Rönnhult", "0777 777777", cities[0]);
            _orderRepo.Create("Bosse Bus", "0777 777777", cities[1]);
            _orderRepo.Create("Kjell Kriminell", "0777 777777", cities[2]);
            _orderRepo.Create("Anders Rolle", "0777 777777", cities[3]);

        }


    }

}
