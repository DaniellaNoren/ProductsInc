namespace Products_Inc.Models.ViewModels
{
    public class UserViewModel
    {
        public string Id { get; set; }
        public string Email { get; internal set; }
        public string UserName { get; internal set; }


        public bool FoundUser { get; set; }
    }
}