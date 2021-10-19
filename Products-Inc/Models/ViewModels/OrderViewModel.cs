using System;
using System.Collections.Generic;
using Products_Inc.Models;


namespace Products_Inc.Models.ViewModels
{
    public class OrderViewModel
    {
        public string OrderId { get; set; }


        public string UserId { get; set; }


        public List<Order> Orders;


    }
}
