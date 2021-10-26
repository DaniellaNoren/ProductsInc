using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Models.Interfaces
{
    public interface IImageService
    {
        bool SaveImage(string base64data);

        byte[] GetImage(string name);
    }
}
