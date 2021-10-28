using System;
using System.Collections.Generic;
using System.Text;
using Products_Inc.Models;


namespace Products_Inc.Models.ViewModels
{
    public class ShoppingCartViewModel
    {
        public string ShoppingCartId { get; set; }

        public string Id { get; set; } 

        public List<ShoppingCartProductViewModel> Products { get; set; }


    }
}
