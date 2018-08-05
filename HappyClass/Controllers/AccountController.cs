using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Authorization;
using HappyClasses.Filters;
using HappyClasses.Model;
using BusinessObject;
using DataEntities;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Threading;
using System.Net.Http.Headers;

namespace HappyClasses.Controllers
{
  public class AccountController : HCBaseController
  {
    private AccountManager accountManager;
    public AccountController(IConfiguration configuration)
        : base(configuration)
    {
      accountManager = new AccountManager();
    }

    private IActionResult Index()
    {
      return View();
    }

    [AllowAnonymous]
    private ActionResult Login(string returnUrl)
    {
      ViewBag.ReturnUrl = returnUrl;
      return View();
    }

    [HttpPost]
    [ModelValidationFilter]
    [ValidateAntiForgeryToken]
    public ActionResult SignUp([FromBody] SignUpViewModel model)
    {
      int result = 0;
      if (ModelState.IsValid)
      {
        UserModel objUM = new UserModel();
        objUM.FirstName = model.FirstName;
        objUM.LastName = model.LastName;
        objUM.Password = model.Password;
        objUM.Email = model.Email;
        objUM.MobileNumber = model.MobileNumber;
        objUM.UserType = UserType.Registered;
        AccountManager objAM = new AccountManager();
        result = objAM.RegisterUser(objUM);

        if (result > 0)
        {
          return Json(result);
        }
      }
      return Json(result);
    }

    //[ExceptionFilter]
    [HttpPost]
    //[AllowAnonymous]
    //[ValidateAntiForgeryToken]
    private async Task<ActionResult> Login(LoginViewModel model, string returnUrl)
    {
      ViewBag.ErrorMessage = "";
      if (!ModelState.IsValid)
      {
        return View(model);
      }
      model.Email = model.Email.Trim();
      AccountManager objAM = new AccountManager();
      //string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
      string ipAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
      if (string.IsNullOrEmpty(ipAddress))
      {
        //ipAddress = Request.ServerVariables["REMOTE_ADDR"];
        ipAddress = Request.HttpContext.Connection.LocalIpAddress.ToString();
      }
      var userModel = objAM.ValidateUser(model.Email, model.Password, ipAddress, DateTime.Now);
      if (userModel != null && userModel.UserId > 0)
      {
        //FormsAuthentication.SetAuthCookie(model.Email, model.RememberMe);

        //if (model.RememberMe)
        //{
        //    //check if cookie exists
        //    HttpCookie existingUserCookie = Request.Cookies[model.Email];

        //    if (existingUserCookie != null)
        //    {
        //        existingUserCookie.Value = model.Email;
        //        existingUserCookie.Expires = DateTime.Now.AddHours(-20);
        //    }

        //    //create new cookie
        //    HttpCookie newCookie = new HttpCookie(model.Email, Common.ToBase64(model.Password));
        //    newCookie.Expires = DateTime.Now.AddHours(12);
        //}
        //GenericIdentity a = new GenericIdentity(model.Email);
        //System.Web.HttpContext.Current.User = new GenericPrincipal(a, null);
        //Session["User"] = userModel;
        //return RedirectToLocal(returnUrl);

        ///////////////security owin ///////////////

        if (await SetClaimsAndSignIn(userModel, ipAddress))
        {
          return RedirectToLocal(returnUrl);
        }
        
      }
      else
      {
        ViewBag.ErrorMessage = "Invalid username or password.";
        ModelState.AddModelError("", "Invalid username or password.");
      }
      return View(model);

      // This doesn't count login failures towards account lockout
      // To enable password failures to trigger account lockout, change to shouldLockout: true

      //var result = await SignInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, shouldLockout: false);
      //switch (result)
      //{
      //    case SignInStatus.Success:
      //        return RedirectToLocal(returnUrl);
      //    case SignInStatus.LockedOut:
      //        return View("Lockout");
      //    case SignInStatus.RequiresVerification:
      //        return RedirectToAction("SendCode", new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
      //    case SignInStatus.Failure:
      //    default:
      //        ModelState.AddModelError("", "Invalid login attempt.");
      //        return View(model);
      //}
    }


    private ActionResult RedirectToLocal(string returnUrl)
    {
      if (Url.IsLocalUrl(returnUrl))
      {
        return Redirect(returnUrl);
      }
      return RedirectToAction("Index", "Home");
    }

    private async void SignIn(List<ccClaim> claims)//Mind!!! This is System.Security.Claims not WIF claims
    {
      await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
      //var claimsIdentity = new ccIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
      int sessionTimeOut = Convert.ToInt32(AppSetting["sessionTimeOut"]);
      ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
      ClaimsPrincipal cp = new ClaimsPrincipal(claimsIdentity);
      await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, cp, new AuthenticationProperties() { IsPersistent = false, ExpiresUtc = DateTimeOffset.Now.AddMinutes(sessionTimeOut) });
      HttpContext.Response.Cookies.Append("CookieAppAuthencticated", "avinash");
      //HttpContext.User = cp;
      //AuthenticationManager.SignIn(new AuthenticationProperties() { IsPersistent = false, ExpiresUtc = DateTimeOffset.Now.AddMinutes(sessionTimeOut) }
      //, claimsIdentity);
      //HttpContext.User = new ccPrinciple(AuthenticationManager.AuthenticationResponseGrant.Principal);
    }

    [HttpPost]
    [ModelValidationFilter]
    public async Task<JsonResult> Login2([FromBody]LoginViewModel model, string returnUrl)
    {
      var msg = new ResponseMessage();
      if (!ModelState.IsValid)
      {
        msg.Errormessage.Add("Not valid email");
        return Json(msg);
      }
      model.Email = model.Email.Trim();
      AccountManager objAM = new AccountManager();
      //string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
      string ipAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
      if (string.IsNullOrEmpty(ipAddress))
      {
        //ipAddress = Request.ServerVariables["REMOTE_ADDR"];
        ipAddress = Request.HttpContext.Connection.LocalIpAddress.ToString();
      }
      var userModel = objAM.ValidateUser(model.Email, model.Password, ipAddress, DateTime.Now);
      if (userModel != null && userModel.UserId > 0)
      {
        if (await SetClaimsAndSignIn(userModel, ipAddress))
        {
          msg.IsSuccess = true;
          return Json(msg);
        }
      }
      else
      {
        msg.Errormessage.Add("Invalid username or password.");
      }
      return Json(msg);
    }

    [HttpPost]
    [Authorize]
    public IActionResult SignOut()
    {
      HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
      HttpContext.Response.Cookies.Delete("CookieAppAuthencticated");
      return Json(true);
    }

    public JsonResult ChangePassword([FromBody] ChangePasswordViewModel model)
    {
      var msg = new ResponseMessage();
      int result = 0;
      if (ModelState.IsValid)
      {
        if (model.Password == model.CurrentPassword)
          msg.Errormessage.Add("New password and current password should not be same.");
        else
        {
          result = accountManager.ChangeUserPassword(GetUserId(), model.CurrentPassword, model.Password);
          if (result <= 0)
          {
            msg.Errormessage.Add(((CCAppError)result).ToDescriptionString());
          }
          else
          {
            msg.IsSuccess = true;
            msg.Result = result;
          }
        }
      }
      return Json(msg);
    }

    [HttpPost("UploadFiles")]
    public async Task<IActionResult> Post([FromBody] List<IFormFile> files)
    {
      long size = files.Sum(f => f.Length);

      // full path to file in temp location
      var filePath = Path.GetTempFileName();

      foreach (var formFile in files)
      {
        if (formFile.Length > 0)
        {
          using (var stream = new FileStream(filePath, FileMode.Create))
          {
            await formFile.CopyToAsync(stream);
          }
        }
      }

      // process uploaded files
      // Don't rely on or trust the FileName property without validation.

      return Ok(new { count = files.Count, size, filePath });
    }



    [HttpPost, DisableRequestSizeLimit, RequestSizeLimit(long.MaxValue)]
    public ActionResult UploadFile2()
    {
      try
      {
        var file = Request.Form.Files[0];
        string folderName = "Upload";
        // full path to file in temp location
        var webRootPath = Path.GetTempFileName();
        string newPath = Path.Combine(webRootPath, folderName);
        newPath = @"C:\Users\Avinash\Documents\UploadedImage";
        if (!Directory.Exists(newPath))
        {
          Directory.CreateDirectory(newPath);
        }
        if (file.Length > 0)
        {
          string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
          string fullPath = Path.Combine(newPath, fileName);
          using (var stream = new FileStream(fullPath, FileMode.Create))
          {
            file.CopyTo(stream);
          }
        }
        return Json("Upload Successful.");
      }
      catch (System.Exception ex)
      {
        return Json("Upload Failed: " + ex.Message);
      }
    }

    [AllowAnonymous]
    [HttpPost]
    public JsonResult GetUserDetail()
    {
      if (User.Identity.IsAuthenticated)
      {
        return Json(User.Identity.IsAuthenticated);
      }
      else
        return Json(false);
    }
  }

  public interface IFormFile
  {
    string ContentType { get; }
    string ContentDisposition { get; }
    IHeaderDictionary Headers { get; }
    long Length { get; }
    string Name { get; }
    string FileName { get; }
    Stream OpenReadStream();
    void CopyTo(Stream target);
    Task CopyToAsync(Stream target);
  }
}
