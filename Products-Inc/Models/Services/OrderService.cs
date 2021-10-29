using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.ViewModels;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.Exceptions;
using Microsoft.AspNetCore.Identity;

namespace Products_Inc.Models.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepo _orderRepo;
        private static UserManager<User> _userManager;


        public OrderService(IOrderRepo iOrderRepo, UserManager<User> userManager)
        {
            _orderRepo = iOrderRepo;
            _userManager = userManager;
        }



        public OrderViewModel Create(CreateOrderViewModel createOrderViewModel)
        {
            Order createdOrder = _orderRepo.Create(createOrderViewModel);
            return GetModel(createdOrder);
        }



        public List<OrderViewModel> ReadAll()
        {
            return _orderRepo.Read().Select(o =>
             GetModel(o)).ToList();

        }

        public OrderViewModel Update(int id, Order order)
        {
            throw new NotImplementedException();
        }

        public OrderViewModel FindBy(int id)
        {
            Order foundOrder = _orderRepo.Read(id);

            return GetModel(foundOrder);
        }

        public bool Delete(int id)
        {
            Order orderToDelete = _orderRepo.Read(id);

            if (orderToDelete != null)
            {
                bool success = _orderRepo.Delete(orderToDelete);

                return success;
            }
            else
            {
                throw new EntityNotFoundException($"User with id ${id} not found");
            }

        }

        public List<OrderViewModel> FindAllBy(string userId)
        {
            return _orderRepo.ReadByUser(userId).Select(o => GetModel(o)).ToList();
        }

        public OrderViewModel GetModel(Order order)
        {
            User user = _userManager.Users.FirstOrDefault(u => u.Id == order.Id);
            UserViewModel userViewModel = new UserViewModel() { Id = user.Id, UserName= user.UserName };


            return new OrderViewModel()
            {
                

                OrderId = order.OrderId,
                Id = order.Id,
                User = userViewModel,
                OrderProducts = order.OrderProducts.Select(p =>
                    new OrderProductViewModel()
                    {
                        ProductId = p.ProductId,
                        OrderId = p.OrderId,
                        Amount = p.Amount,
                        Product = new ProductViewModel()
                        {
                            ProductName = p.Product.ProductName,
                            ProductDescription = p.Product.ProductDescription,
                            ProductPrice = p.Product.ProductPrice,
                            ImgPath = p.Product.ImgPath
                        }
                    }).ToList()
            };
        }


    }

}
