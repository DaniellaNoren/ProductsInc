using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;


namespace Products_Inc.Models
{
    public class Order
    {

        public Order() { }
        public Order(string userId)
        {
            UserId = userId;
        }
        public Order(string userId, List<OrderProduct> products)
        {
            UserId = userId;
            Products = products;
        }


        public int OrderId { get; set; }

        public string UserId { get; set; }


        

        public List<OrderProduct> Products { get; set; } // dotnet core 3.1 many-to-many link
    }
}
