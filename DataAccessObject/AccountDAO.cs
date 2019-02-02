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
                result = DataHelper.ExecuteScalar(SQLConstant.CC_REGISTER_USER, objCommand);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }

        public UserDetail GetUserByUserId(int userId)
        {
            UserDetail objUserDetail = null;
            try
            {
                objCommand = new SqlCommand();
                objCommand.Parameters.AddWithValue("@UserId", userId);
                SqlDataReader dr = DataHelper.ExecuteReader(SQLConstant.CC_GET_USER_BY_USERID, objCommand);
                if (dr.HasRows)
                {
                    objUserDetail = new UserDetail();
                    while (dr.Read())
                    {
                        objUserDetail.UserId = Convert.ToInt32(dr["UserId"]);
                        objUserDetail.FirstName = Convert.ToString(dr["FirstName"]);
                        objUserDetail.FathertName = Convert.ToString(dr["FatherName"]);
                        objUserDetail.LastName = Convert.ToString(dr["LastName"]);
                        if (dr["DOB"] != DBNull.Value)
                            objUserDetail.DOB = Convert.ToDateTime(dr["DOB"]);
                        objUserDetail.UserType = (UserType)Convert.ToInt32(dr["UserTypeId"]);
                        objUserDetail.Email = Convert.ToString(dr["Email"]);
                        objUserDetail.MobileNumber = Convert.ToString(dr["MobileNo"]);
                        objUserDetail.AlternateNo = Convert.ToString(dr["AlternateNo"]);
                        objUserDetail.ImageName = Convert.ToString(dr["ImageName"]);
                        objUserDetail.Gender = Convert.ToString(dr["Gender"]);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return objUserDetail;
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
                SqlDataReader dr = DataHelper.ExecuteReader(SQLConstant.CC_VALIDATE_USER, objCommand);
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
                result = DataHelper.ExecuteScalar(SQLConstant.CC_CHANGE_USER_PASSWORD, objCommand);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }
    }
}
