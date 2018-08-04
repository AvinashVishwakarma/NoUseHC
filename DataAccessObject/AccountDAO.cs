using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using DataAccessObject.Helper;
using DataEntities;

namespace DataAccessObject
{
    public class AccountDAO : DBHelper
    {

        public int RegisterUser(UserModel objUserModel)
        {
            int result = 0;
            try
            {
                objCommand = new SqlCommand();
                objCommand.Parameters.AddWithValue("@FirstName", objUserModel.FirstName);
                objCommand.Parameters.AddWithValue("@LastName", objUserModel.LastName);
                objCommand.Parameters.AddWithValue("@FathertName", objUserModel.FathertName);
                objCommand.Parameters.AddWithValue("@DOB", objUserModel.DOB);
                objCommand.Parameters.AddWithValue("@Email", objUserModel.Email);
                objCommand.Parameters.AddWithValue("@MobileNumber", objUserModel.MobileNumber);
                objCommand.Parameters.AddWithValue("@Password", objUserModel.Password);
                objCommand.Parameters.AddWithValue("@AlternateNo", objUserModel.AlternateNo);
                objCommand.Parameters.AddWithValue("@Gender", objUserModel.Gender);
                objCommand.Parameters.AddWithValue("@UserType", objUserModel.UserType);
                result = DataHelper.ExecuteScalar(SQLConstant.CC_REGISTERUSER, objCommand);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }

        public UserModel ValidateUser(string Username, string Password, string IPAddress, DateTime loginTime)
        {
            UserModel objUserModel = null;
            try
            {
                objCommand = new SqlCommand();
                objCommand.Parameters.AddWithValue("@Username", Username);
                objCommand.Parameters.AddWithValue("@Password", Password);
                objCommand.Parameters.AddWithValue("@IPAddress", IPAddress);
                objCommand.Parameters.AddWithValue("@LoginDate", loginTime);
                SqlDataReader dr = DataHelper.ExecuteReader(SQLConstant.CC_VALIDATEUSER, objCommand);
                if (dr.HasRows)
                {
                    objUserModel = new UserModel();
                    while (dr.Read())
                    {
                        objUserModel.UserId = Convert.ToInt32(dr["UserId"]);
                        objUserModel.FirstName = Convert.ToString(dr["FirstName"]);
                        objUserModel.FathertName = Convert.ToString(dr["FatherName"]);
                        objUserModel.LastName = Convert.ToString(dr["LastName"]);
                        if (dr["DOB"] != DBNull.Value)
                            objUserModel.DOB = Convert.ToDateTime(dr["DOB"]);
                        objUserModel.UserType = (UserType)Convert.ToInt32(dr["UserTypeId"]);
                        objUserModel.Email = Convert.ToString(dr["Email"]);
                        objUserModel.MobileNumber = Convert.ToString(dr["MobileNo"]);
                        objUserModel.AlternateNo = Convert.ToString(dr["AlternateNo"]);
                        objUserModel.ImageName = Convert.ToString(dr["ImageName"]);
                        objUserModel.Gender = Convert.ToString(dr["Gender"]);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return objUserModel;
        }

        public int ChangePassword(long userId, string oldPassword, string newPassword)
        {
            int result = 0;
            try
            {
                objCommand = new SqlCommand();
                objCommand.Parameters.AddWithValue("@UserId", userId);
                objCommand.Parameters.AddWithValue("@OldPassword", oldPassword);
                objCommand.Parameters.AddWithValue("@NewPassword", newPassword);
                result = DataHelper.ExecuteScalar(SQLConstant.CC_CHANGEUSERPASSWORD, objCommand);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }
    }
}
