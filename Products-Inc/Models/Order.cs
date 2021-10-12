using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;


namespace Products_Inc.Models
{
    public class Order
    {
        private string _orderName;

        public Order() { }
        public Order(string orderName)
        {
            OrderName = orderName;
        }


        public int OrderId { get; }


        public string OrderName
        {
            get { return _orderName; }
            set { _orderName = value; }
        }

        
    }
}
