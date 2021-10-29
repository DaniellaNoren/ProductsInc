using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Products_Inc.Controllers;
using Products_Inc.Models;
using Products_Inc.Data;
using Products_Inc.Models.Interfaces;
using Products_Inc.Models.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JavaScriptEngineSwitcher.V8;
using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using React.AspNet;
using Microsoft.AspNetCore.Http;



namespace Products_Inc
{
    public class Startup
    {
        public IWebHostEnvironment Environment { get; }
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            Configuration = configuration;
            Environment = environment;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            // -------- DBContexts etc start-------
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("ProductIncConnection")));

            //services.AddDbContext<IdentityAppDbContext>(options =>
            //    options.UseSqlServer(
            //        Configuration.GetConnectionString("ProductIncConnection")));

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IUserService, UserService>();

            services.AddReact();

            services.AddJsEngineSwitcher(options =>
            {
                options.DefaultEngineName = V8JsEngine.EngineName;
                options.EngineFactories.AddV8();
            }
            );


            services.AddIdentity<User, IdentityRole>(o =>
                o.SignIn.RequireConfirmedAccount = false)
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();


            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 4;
                options.Password.RequiredUniqueChars = 1;


                options.User.AllowedUserNameCharacters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                options.User.RequireUniqueEmail = true;
            });


            services.ConfigureApplicationCookie(options =>
            {
                options.LoginPath = $"/user/login";
                options.LogoutPath = $"/user/Logout";
                options.AccessDeniedPath = $"/user/AccessDenied";
            });

            services.AddControllersWithViews();

            services.AddScoped<IUserService, UserService>(); // identity
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IShoppingCartService, ShoppingCartService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IImageService, ImageService>();
            services.AddSingleton<ImageServiceOptions>(new ImageServiceOptions(Environment.WebRootPath, "img", "jpg"));
            services.AddScoped<IShoppingCartRepo, DbShoppingCartRepo>();
            services.AddScoped<IOrderRepo, DbOrderRepo>();
            services.AddScoped<IProductRepo, DbProductRepo>();

            //services.AddTransient<UserController>();

            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseReact(config =>
            {
                config
                    .SetReuseJavaScriptEngines(true)
                    .SetLoadBabel(false)
                    .SetLoadReact(false)
                    .DisableServerSideRendering()
                    .SetReactAppBuildPath("~/reactjs/dist")
                    //.AddScriptWithoutTransform("~/js/ajaxactions.js")
                    .AddScriptWithoutTransform("~/reactjs/dist/runtime.js")
                    .AddScriptWithoutTransform("~/reactjs/dist/vendor.js")
                    .AddScriptWithoutTransform("~/reactjs/dist/main.js");


            });


            app.UseHttpsRedirection();

            app.UseStaticFiles();


            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute("default", "{path?}", new { controller = "Home", action = "Index" });

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");


                //endpoints.MapControllerRoute(
                //name: "ReactSPA",
                //pattern: "React/{id?}",
                //defaults: new { controller = "React", action = "Index" });

                //endpoints.MapControllerRoute(
                //name: "ReactSPA",
                //pattern: "User/{id?}",
                //defaults: new { controller = "User", action = "Index" });

                //endpoints.MapControllerRoute(
                //name: "Reactpartview",
                //pattern: "React/{id?}",
                //defaults: new { controller = "React", action = "get" });

                //endpoints.MapControllerRoute(
                //name: "Edituserroles",
                //pattern: "UserRoles/{id?}",
                //defaults: new { controller = "Identity", action = "Index" });

                //endpoints.MapControllerRoute(
                //name: "CreateRoles",
                //pattern: "CreateRole/{id?}",
                //defaults: new { controller = "Identity", action = "Create" });

                //endpoints.MapControllerRoute(
                //name: "UpdateRoles",
                //pattern: "UpdateRole/{id?}",
                //defaults: new { controller = "Identity", action = "Update" });


                endpoints.MapFallbackToController("Index", "Home");

                endpoints.MapRazorPages();


            });


        }
    }
}
