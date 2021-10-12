using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Products_Inc.Models
{
    public class User
    {

        private string _personName;
        private string _personPhoneNumber;


        public User()
        { }

        /* public User(List<PersonLanguage> languages)
         {
             Languages = languages;
         }*/


        public User(string personName, string personPhoneNumber)
        {

            UserName = personName;


        }


        public int UserId { get; set; }

        public string UserName
        {
            get { return _personName; }
            set { _personName = value; }
        }


        public string PersonPhoneNumber
        {
            get { return _personPhoneNumber; }
            set { _personPhoneNumber = value; }
        }

    }
}
