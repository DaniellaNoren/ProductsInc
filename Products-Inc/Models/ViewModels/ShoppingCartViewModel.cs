using System;
using System.Collections.Generic;
using System.Text;
using Products_Inc.Models;


namespace Products_Inc.Models.ViewModels
{
    public class ShoppingCartViewModel
    {
        public string ShoppingCartId { get; set; }

        public string UserId { get; set; }

        public List<ProductViewModel> Products { get; set; }

        //public override string ToString()
        //{
        //    StringBuilder stringBuilder = new StringBuilder();

        //   // Products == null 
        //}

    }
}
