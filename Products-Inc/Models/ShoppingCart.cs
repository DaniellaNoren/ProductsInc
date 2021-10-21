using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Models
{
    public class ShoppingCart 
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }

        public List<ShoppingCartProduct> Products { get; set; }

        [DefaultValue(true)]
        public bool Active { get; set; }
        public bool TransactionComplete { get; set; }
    }
}
