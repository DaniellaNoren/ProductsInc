using Microsoft.EntityFrameworkCore;
using Products_Inc.Models;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Products_Inc.Data
{
    public class DbShoppingCartRepo : IShoppingCartRepo
    {
        private readonly ApplicationDbContext _context;

        public DbShoppingCartRepo(ApplicationDbContext context)
        {
            this._context = context;
        }

        public ShoppingCart AddProduct(int productId, int shoppingCartId)
        {
            ShoppingCart shoppingCart = Read(shoppingCartId);
            shoppingCart.Products.Add(new ShoppingCartProduct() { ProductId = productId, ShoppingCartId = shoppingCartId });
            _context.Update(shoppingCart);
            _context.SaveChanges();

            return shoppingCart;
                
        }


        public ShoppingCart Create(ShoppingCart shoppingCart)
        {
            _context.Add(shoppingCart);
            _context.SaveChanges();

            return Read(shoppingCart.Id);
        }

        public bool Delete(ShoppingCart shoppingCart)
        {
            _context.ShoppingCarts.Remove(shoppingCart);
            _context.SaveChanges();

            return true;
        }

        public List<ShoppingCart> Read()
        {
            return _context.ShoppingCarts.ToList();
        }

        public ShoppingCart Read(int id)
        {
            return _context.ShoppingCarts.Include(sc => sc.Products).ThenInclude(scp => scp.Product).Where(sc => sc.Id == id).FirstOrDefault();
        }

        public List<ShoppingCart> ReadByUser(int userid)
        {
            return _context.ShoppingCarts.Where(sc => sc.UserId == userid).ToList();
        }

        public ShoppingCart Update(ShoppingCart shoppingCart)
        {
            throw new NotImplementedException();
        }
    }
}
