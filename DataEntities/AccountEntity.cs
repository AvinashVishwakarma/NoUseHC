using System;
using System.Collections.Generic;
using System.Text;

namespace DataEntities
{
    public class UserModel
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string FathertName { get; set; }
        public string LastName { get; set; }
        public DateTime? DOB { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string MobileNumber { get; set; }
        public UserType UserType { get; set; }
        public string Gender { get; set; }
        public string ImageName { get; set; }
        public List<ClientRole> UserRole { get; set; }
        public string AlternateNo { get; set; }
    }

    public class UserDetail //: UserModel
    {
        public List<Standard> Standard { get; set; }
        public List<Subject> Subject { get; set; }

    }

}
