using System;
using System.Collections.Generic;
using System.Text;
using System.Reflection;
using System.ComponentModel;

namespace DataEntities
{
    [Serializable]
    public enum UserType
    {
        None = 0,
        SuperAdmin = 1,
        CoCoSuperAdmin = 2,
        Admin = 3,
        Faculty = 4,
        Student = 5,
        Registered = 6,
    }

    public enum Gender
    {
        Male = 1,
        Female = 2,
    }

    public enum CCAppError
    {
        SomeError = 0,
        [Description("Current password is not correct.")]
        InvalidCurrentPassword = -1,
        [Description("New password should not match with last 2 password.")]
        NewPasswordMatchWithOldPassword = -2,

    }

    //public enum RoleType
    //{
    //    None = 0,
    //    Admin = 1,
    //    CoAdmin = 2,
    //    Faculty = 3,
    //    Student = 4,
    //}


    public static class CCAppErrorExtension
    {
        public static string ToDescriptionString(this CCAppError val)
        {
            DescriptionAttribute[] attributes = (DescriptionAttribute[])val.GetType().GetField(val.ToString()).GetCustomAttributes(typeof(DescriptionAttribute), false);
            return attributes.Length > 0 ? ((DescriptionAttribute)attributes[0]).Description : string.Empty;
        }
    }
}
