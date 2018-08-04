using System;
using System.Collections.Generic;
using System.Text;

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

    //public enum RoleType
    //{
    //    None = 0,
    //    Admin = 1,
    //    CoAdmin = 2,
    //    Faculty = 3,
    //    Student = 4,
    //}
}
