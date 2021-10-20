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


        
        public OrderViewModel Create(CreateOrderViewModel createOrderViewModel)
        {
            Order createdOrder = _orderRepo.Create(createOrderViewModel);

            return new OrderViewModel() { OrderId = createdOrder.OrderId.ToString(), Products = createdOrder.OrderProducts.Select(op => new ProductViewModel() { ImgPath = op.Product.ImgPath, ProductDescription = op.Product.ProductDescription, ProductId = op.ProductId, ProductName = op.Product.ProductName, ProductPrice = op.Product.ProductPrice }).ToList(), UserId = createdOrder.UserId.ToString() };
        }



        public List<OrderViewModel> ReadAll()
        {
           return _orderRepo.Read().Select(o => 
            new OrderViewModel() { 
                OrderId = o.OrderId.ToString(), 
                UserId = o.UserId.ToString(), 
                Products = o.OrderProducts.Select(p => 
                new ProductViewModel() { 
                    ProductDescription = p.Product.ProductDescription, 
                    ImgPath = p.Product.ImgPath, 
                    ProductName = p.Product.ProductName, 
                    ProductPrice = p.Product.ProductPrice}).ToList() 
            }).ToList();
            
        }

        public OrderViewModel Update(int id, Order order)
        {
            throw new NotImplementedException();
        }


        /*public OrderViewModel FindBy(OrderViewModel search)
        {
            search.OrderListView.Clear();

            List<Order> orderList = _orderRepo.Read();

            foreach (Order item in orderList)
            {
                if (item.OrderId.Contains(search.FilterString, StringComparison.OrdinalIgnoreCase)) //||
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
        */


        public OrderViewModel FindBy(int id)
        {
            Order foundOrder = _orderRepo.Read(id);

            return new OrderViewModel() { OrderId = foundOrder.OrderId.ToString(), Products = foundOrder.OrderProducts.Select(op => new ProductViewModel() { ImgPath = op.Product.ImgPath, ProductDescription = op.Product.ProductDescription, ProductId = op.ProductId, ProductName = op.Product.ProductName, ProductPrice = op.Product.ProductPrice }).ToList(), UserId = foundOrder.UserId.ToString() };

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

        public List<OrderViewModel> FindAllBy(int userid)
        {
           return _orderRepo.ReadByUser(userid).Select(o => new OrderViewModel()
            {
                OrderId = o.OrderId.ToString(),
                UserId = o.UserId.ToString(),
                Products = o.OrderProducts.Select(p =>
                new ProductViewModel()
                {
                    ProductDescription = p.Product.ProductDescription,
                    ImgPath = p.Product.ImgPath,
                    ProductName = p.Product.ProductName,
                    ProductPrice = p.Product.ProductPrice
                }).ToList()
            }).ToList();
        }


    }

}
