using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Products_Inc.Models.ViewModels
{
    public class CreateShoppingCartViewModel
    {
   
        public string UserId { get; set; }

        [DefaultValue(true)]
        public bool Active { get; set; }
        public bool TransactionComplete { get; set; }
        public List<int> ProductIds { get; set; }

        public void AddProductId(int id)
        {
            if (ProductIds == null)
                ProductIds = new List<int>();

            ProductIds.Add(id);
        }
    }  
     
}
