using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Products_Inc.Models.ViewModels
{
    public class CreateShoppingCartViewModel
    {
   
        public int UserId { get; set; }

        public List<int> ProductIds { get; set; }


    }  
     
}
