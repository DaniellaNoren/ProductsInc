using System;

namespace Products_Inc.Models
{
    public class ProductsViewModel
    {
        public string RequestId2 { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId2);
    }
}
