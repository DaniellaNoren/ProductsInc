using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace Products_Inc.Models
{
    public class User : IdentityUser
    {


        private string _personPhoneNumber;
       // private List<Order> _orders;

        /* public User(List<PersonLanguage> languages)
         {
             Languages = languages;
         }*/



        [Required]
        public int UserId { get; set; }



        public string PersonPhoneNumber
        {
            get { return _personPhoneNumber; }
            set { _personPhoneNumber = value; }
        }

        //public List<Order> Orders { get { return _orders; } set { _orders = value; } }

    }
}
