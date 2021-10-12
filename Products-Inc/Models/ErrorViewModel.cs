using System;

namespace Products_Inc.Models
{
    public class ErrorViewModel
    {
        public string RequestId2 { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId2);
    }
}
