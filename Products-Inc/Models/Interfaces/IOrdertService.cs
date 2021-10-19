using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products_Inc.Models;
using Products_Inc.Models.Services;
using Products_Inc.Models.ViewModels;

namespace Products_Inc.Models.Interfaces
{
    public interface IOrderService
    {
        Order Create(CreateOrderViewModel createOrderViewModel);

        OrderViewModel ReadAll();

        OrderViewModel FindBy(OrderViewModel search);

        Order FindBy(int id);

        Order Update(int id, Order order);

        bool Delete(int id);

    }
}
