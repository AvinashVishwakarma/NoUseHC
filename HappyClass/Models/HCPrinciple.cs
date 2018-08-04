using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;

namespace HappyClasses.Model
{
    public class ccPrinciple : ClaimsPrincipal
    {
        public ccPrinciple(ccIdentity ccIdentity)
            : base(ccIdentity)
        {

        }

        public ccPrinciple(ClaimsPrincipal claimsPrinciple)
            : base(claimsPrinciple)
        {

        }
    }
}
