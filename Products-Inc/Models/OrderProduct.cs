using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;


namespace Products_Inc.Models
{
    public class OrderProduct // This is jointable many-to-many with Order and Product coz of dotnet core 3.1 do not autojointable
    {
        private string _orderName;


        public OrderProduct() { }
        public OrderProduct(string orderName)
        {
            OrderName = orderName;
        }


        public int OrderId { get; set; }
        public Order Order { get; set; }


        public int ProductId { get; set; }
        public Product Product { get; set; }

    }
}
