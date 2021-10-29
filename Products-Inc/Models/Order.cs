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
        public Order(string userId, List<OrderProduct> orderProducts)
        {
            Id = userId;
            OrderProducts = orderProducts;
        }


        public int OrderId { get; set; }

        public string Id { get; set; } // This is Identity UserID named Id as a string in identity table


        

        public List<OrderProduct> OrderProducts { get; set; } // dotnet core 3.1 many-to-many link

        public List<User> Users { get; set; } // get objectlist of users. So that in repo,
                                       // we can match userobject with an order that has userId by include theninclude
        public User User { get; set; }
        //public List<Order> Orders { get; set; }
    }
}
