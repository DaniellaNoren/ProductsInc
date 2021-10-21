using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;


namespace Products_Inc.Models
{
    public class OrderProduct // This is join-table many-to-many with Order and Product coz of dotnet core 3.1 do not autojointable
    {


        public OrderProduct() { } // Empty constructor coz of "add-migration" needs that when using entity in core 3.1



        public int OrderId { get; set; }
        public Order Order { get; set; }


        public int ProductId { get; set; }
        public Product Product { get; set; }

    }
}
