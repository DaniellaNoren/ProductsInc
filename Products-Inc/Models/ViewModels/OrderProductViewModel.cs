using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Models.ViewModels
{
    public class OrderProductViewModel
    {
        public int OrderId { get; set; }
        public ProductViewModel ProductViewModel { get; set; }

        public int ProductId { get; set; }
        public int Amount { get; set; }
    }
}
