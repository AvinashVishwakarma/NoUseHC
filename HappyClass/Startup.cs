using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HappyClasses.Filters;
using HappyClasses.MiddleWare;
using HappyClasses.Model;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HappyClass
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.Configure<ApplicationSettings>(Configuration.GetSection("ApplicationSettings"));

      //services.AddIdentity<ApplicationUser, ApplicationRole>()
      //    .AddDefaultTokenProviders()
      //    .AddClaimsPrincipalFactory<ApplicationUser>();

      //services.AddTransient<IUserStore<ApplicationUser>, MyUserStore<ApplicationUser>>();

      //services.AddTransient<IRoleStore<ApplicationRole>, RoleStore>();
      //services.ConfigureApplicationCookie(options =>
      //{
      //    options.Cookie.HttpOnly = true;
      //    options.LoginPath = "/Login";
      //    options.LogoutPath = "/Logout";
      //});

      services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
      .AddCookie(b =>
      {
        b.AccessDeniedPath = "/Login";
        b.LoginPath = "/Login";
        b.LogoutPath = "/Logout";
      });

      services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");
      services.Configure<FormOptions>(options =>
      {
        options.MultipartHeadersLengthLimit = int.MaxValue;
        options.ValueLengthLimit = int.MaxValue;
        options.MultipartBodyLengthLimit = long.MaxValue;
      });
      services.AddMvc(options =>
      {
        options.Filters.Add(new ModelValidationFilter());
        //options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
        //options.Filters.Add(new RequireHttpsAttribute());
      });

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, IAntiforgery antiforgery)
    {
      if (env.IsDevelopment())
      {
        app.UseBrowserLink();
        app.UseDeveloperExceptionPage();
        //app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
        //{
        //  HotModuleReplacement = true
        //});
      }
      else
      {
        app.UseExceptionHandler("/Home/Error");
      }

      app.UseMyMiddleware();
      //app.UseHttpsRedirection();
      app.UseStaticFiles();

      app.UseForwardedHeaders(new ForwardedHeadersOptions
      {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
      });

      //add authentication
      app.UseAuthentication();

      app.Use(async (context, next) =>
      {
        // XSRF-TOKEN used by angular in the $http if provided
        var tokens = antiforgery.GetAndStoreTokens(context);
        context.Response.Cookies.Append("XSRF-TOKEN", tokens.RequestToken);
        await next();
      });
      app.UseMvc(routes =>
      {
        routes.MapRoute(
            name: "default",
            template: "{controller=Home}/{action=IndexPage}/{id?}");
        //template: "{controller=Home}/{action=Index}/{id?}");

        routes.MapSpaFallbackRoute(
            name: "spa-fallback",
            defaults: new { controller = "Home", action = "IndexPage" });
      });
    }
  }
  //public class Startup
  //{
  //    public Startup(IConfiguration configuration)
  //    {
  //        Configuration = configuration;
  //    }

  //    public IConfiguration Configuration { get; }

  //    // This method gets called by the runtime. Use this method to add services to the container.
  //    public void ConfigureServices(IServiceCollection services)
  //    {
  //        services.AddMvc();
  //    }

  //    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
  //    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
  //    {
  //        if (env.IsDevelopment())
  //        {
  //            app.UseBrowserLink();
  //            app.UseDeveloperExceptionPage();
  //        }
  //        else
  //        {
  //            app.UseExceptionHandler("/Home/Error");
  //        }

  //        app.UseStaticFiles();

  //        app.UseMvc(routes =>
  //        {
  //            routes.MapRoute(
  //                name: "default",
  //                template: "{controller=Home}/{action=IndexPage}/{id?}");
  //        });
  //    }
  //}
}
