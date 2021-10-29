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
            Id = userId; 
        }
        public Order(string userId, List<OrderProduct> products)
        {
            Id = userId;
            Products = products;
        }


        public int OrderId { get; set; }

        public string Id { get; set; } // This is Identity userID named Id only in database


        

        public List<OrderProduct> Products { get; set; } // dotnet core 3.1 many-to-many link
    }
}
