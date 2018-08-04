using System;
using System.Collections.Generic;
using System.Text;

namespace DataEntities
{
    public enum RegisterMessage
    {
        Error = 0,
        EmailExists = -1,
    }
    public enum ChangePassword
    {
        Error = 0,
        InvalidCurrentPassword = -1,
        NewPasswordMatchesWithOldPassword = -2
    }
}
