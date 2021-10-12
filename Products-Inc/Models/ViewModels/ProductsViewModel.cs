using System;

namespace Products_Inc.Models.ViewModels
{
    public class ProdViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(this.RequestId);
    }
}
