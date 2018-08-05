using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using DataEntities;
using HappyClasses.Model;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Configuration;

namespace HappyClasses.Controllers
{
  public abstract class HCBaseController : Controller
  {
    protected readonly IConfiguration AppSetting;
    public HCBaseController(IConfiguration configuration)
    {
      AppSetting = configuration;
    }

    public int GetUserId()
    {
      if (User.Identity.IsAuthenticated)
        return Convert.ToInt32(GetClaim(ccIdentity.IdClaimType));
      else
      {
        HttpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
        throw new Exception("User is not authorized.");
      }
    }

    private string GetClaim(string claimType)
    {
      return User.Identities.First().Claims.Where(a => a.Type == claimType).First().Value;
    }

    private List<ccClaim> SetClaims(UserModel user, string ipAddress)
    {
      var claims = new List<ccClaim>();
      claims.Add(new ccClaim(ClaimTypes.Email, user.Email));
      claims.Add(new ccClaim(ccIdentity.IPClaimType, ipAddress));
      claims.Add(new ccClaim(ccIdentity.IdClaimType, user.UserId.ToString()));
      claims.Add(new ccClaim(ClaimTypes.Name, user.FirstName));
      claims.Add(new ccClaim(ClaimTypes.Surname, user.LastName));
      claims.Add(new ccClaim(ClaimTypes.Gender, user.Gender));
      claims.Add(new ccClaim(ClaimTypes.MobilePhone, user.MobileNumber));
      //claims.Add(new ccClaim("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier", user.UserId.ToString()));
      //claims.Add(new ccClaim("http://schemas.microsoft.com/accesscontrolservice/2010/07/claims/identityprovider", user.Email));

      var roles = new[] { "Admin", "Citizin", "Worker" };
      var groups = new[] { "Admin", "Citizin", "Worker" };

      foreach (var item in roles)
      {
        claims.Add(new ccClaim(ccIdentity.RolesClaimType, item));
      }
      foreach (var item in groups)
      {
        claims.Add(new ccClaim(ccIdentity.GroupClaimType, item));
      }
      return claims;
    }
    //private async void SignIn(List<ccClaim> claims)
    //{
    //}

    protected async Task<bool> SetClaimsAndSignIn(UserModel user, string ipAddress)
    {
      var claims = SetClaims(user, ipAddress);
      await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
      int sessionTimeOut = Convert.ToInt32(AppSetting["sessionTimeOut"]);
      ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
      ClaimsPrincipal cp = new ClaimsPrincipal(claimsIdentity);
      await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, cp, new AuthenticationProperties() { IsPersistent = false, ExpiresUtc = DateTimeOffset.Now.AddMinutes(sessionTimeOut) });
      HttpContext.Response.Cookies.Append("CookieAppAuthencticated", "avinash");
      return true;
    }

    protected void AddModelError(ModelStateDictionary modelState, ResponseMessage msg)
    {
      foreach(var a in modelState.Values)
      {
        foreach(var error in a.Errors)
        {
          msg.Errormessage.Add(error.ErrorMessage);
        }
      }
    }
  }
}
