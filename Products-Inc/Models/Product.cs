using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Products_Inc.Models
{
    public class Product
    {
        private int _productId;
        private string _productName;

        public Product() { }
        public Product(string productName)
        {
            ProductName = productName;
        }


        public int ProductId
        {
            get { return _productId; }
            set { _productId = value; }
        }


        public string ProductName
        {
            get { return _languageName; }
            set { _languageName = value; }
        }

    }
}
