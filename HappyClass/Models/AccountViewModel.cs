using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HappyClasses.Model
{
  public class ResponseMessage
  {
    public ResponseMessage()
    {
      Errormessage = new List<string>();
    }
    public List<string> Errormessage { get; set; }
    public bool IsSuccess { get; set; }
    public object Result { get; set; }
  }
  public abstract class PasswordModel
  {
    [Required]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
    [DataType(DataType.Password)]
    public string Password { get; set; }
  }
  public class LoginViewModel
  {

    [Required]
    [EmailAddress(ErrorMessage = "Invalid email id.")]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }


    [Display(Name = "Remember me?")]
    public bool RememberMe { get; set; }
  }

  public class SignUpViewModel : LoginViewModel
  {
    [Required]
    [Display(Name = "MobileNumber")]
    [MinLength(10, ErrorMessage = "Invalid mobile number.")]
    public string MobileNumber { get; set; }

    //[Required]
    //[StringLength(6, ErrorMessage = "The OTP must be at least 4 characters long.", MinimumLength = 4)]
    public string OTP { get; set; }


    [Required]
    [StringLength(100, ErrorMessage = "The First name must be at least 3 characters long.", MinimumLength = 3)]
    public string FirstName { get; set; }

    [StringLength(100, ErrorMessage = "The Last name must be at least 3 characters long.", MinimumLength = 3)]
    public string LastName { get; set; }

  }
  public class ChangePasswordViewModel : PasswordModel
  {
    [Required]
    public string CurrentPassword { get; set; }
  }
  public class RegisterViewModel
  {
    [Required]
    [EmailAddress]
    [Display(Name = "Email")]
    public string Email { get; set; }

    [Required]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
    [DataType(DataType.Password)]
    [Display(Name = "Password")]
    public string Password { get; set; }

    [DataType(DataType.Password)]
    [Display(Name = "Confirm password")]
    [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
    public string ConfirmPassword { get; set; }
  }

  public class ExternalLoginViewModel
  {
    [Required]
    [EmailAddress]
    public string Email { get; set; }
  }

  public class LoginWithRecoveryCodeViewModel
  {
    [Required]
    [DataType(DataType.Text)]
    [Display(Name = "Recovery Code")]
    public string RecoveryCode { get; set; }
  }

  public class ForgotPasswordViewModel
  {
    [Required]
    [EmailAddress]
    public string Email { get; set; }
  }

  public class ResetPasswordViewModel
  {
    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [DataType(DataType.Password)]
    [Display(Name = "Confirm password")]
    [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
    public string ConfirmPassword { get; set; }

    public string Code { get; set; }
  }

  public class LoginWith2faViewModel
  {
    [Required]
    [StringLength(7, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
    [DataType(DataType.Text)]
    [Display(Name = "Authenticator code")]
    public string TwoFactorCode { get; set; }

    [Display(Name = "Remember this machine")]
    public bool RememberMachine { get; set; }

    public bool RememberMe { get; set; }
  }
}
