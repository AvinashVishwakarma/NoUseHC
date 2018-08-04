using System;
using System.Collections.Generic;
using System.Text;

namespace DataEntities
{
    public class Standard
    {
        public int STDId { get; set; }
        public string STDDesc { get; set; }
    }

    public class Subject
    {
        public int SubId { get; set; }
        public string SubDesc { get; set; }
    }

    public class ClientRole
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
    }
}
