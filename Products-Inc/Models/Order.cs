using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;


namespace Products_Inc.Models
{
    public class Order
    {
        private string _orderName;


        public Order() { }



        public int OrderId { get; set; }

        public int UserId { get; set; }


        public List<Order> Orders

        public List<OrderProduct> OrderProducts { get; set; } // dotnet core 3.1 many-to-many link
    }
}
