using System;
using System.Collections.Generic;
using System.Text;
using DataEntities;
using DataAccessObject;

namespace BusinessObject
{
    public class AccountManager
    {
        public UserModel ValidateUser(string username, string password, string IPAddress, DateTime loginTime)
        {
            AccountDAO obj = new AccountDAO();
            return obj.ValidateUser(username, password, IPAddress, loginTime);
        }

        public int RegisterUser(UserModel objUserModel)
        {
            AccountDAO obj = new AccountDAO();
            return obj.RegisterUser(objUserModel);
        }
        
        public int ChangeUserPassword(long userId, string oldPassword, string newPassword)
        {
            AccountDAO obj = new AccountDAO();
            return obj.ChangePassword(userId, oldPassword, newPassword);
        }
    }
}
