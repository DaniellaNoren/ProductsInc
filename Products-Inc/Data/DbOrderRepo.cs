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
            Order newOrder = new Order() {
            UserId = createOrderViewModel.UserId,
            OrderProducts = createOrderViewModel.Products.Select(op => new OrderProduct() { ProductId =  op.Product.ProductId, Amount = op.Amount}).ToList() };

             _orderListContext.Orders.Add(newOrder);
            _orderListContext.SaveChanges();

            return Read(newOrder.OrderId);
        }


        public List<Order> Read()
        {
            List<Order> pList = _orderListContext.Orders
                .Include(f => f.OrderProducts).ThenInclude(g => g.Product)
                .Include(h => h.User)
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

        public List<Order> ReadByUser(string userId)
        {
            return _orderListContext.Orders.Include(o => o.OrderProducts).ThenInclude(op => op.Product).Where(o => o.UserId.Equals(userId)).ToList();
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
