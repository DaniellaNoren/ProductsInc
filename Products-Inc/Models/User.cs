using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Products_Inc.Models
{
    public class User
    {
        private string _userName;
        private string _userEmail;



        public User() { }
        public User(string userName, string userEmail)
        {
            UserName = _userName;
            UserEmail = _userEmail;
        }



        public int UserId { get; set; }

        public string UserName
        {
            get { return _userName; }
            set { _userName = value; }
        }


        public string UserEmail
        {
            get { return _userEmail; }
            set { _userEmail = value; }
        }

    }
}
