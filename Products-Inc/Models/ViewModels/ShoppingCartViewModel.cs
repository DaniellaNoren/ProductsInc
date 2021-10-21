using System;
using System.Collections.Generic;
using Products_Inc.Models;


namespace Products_Inc.Models.ViewModels
{
    public class ShoppingCartViewModel
    {
        public string ShoppingCartId { get; set; }

        public string UserId { get; set; }

        public List<ProductViewModel> Products { get; set; }

    }
}
