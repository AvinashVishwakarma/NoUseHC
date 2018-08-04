using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using DataEntities;

namespace HappyClasses.Model
{
    public class ccIdentity: ClaimsIdentity
    {

        public const string RolesClaimType = "http://www.ccApplication.com/CuttingEdge.Security.Role";
        public const string GroupClaimType = "http://www.ccApplication.com/CuttingEdge.Security.Group";
        public const string IPClaimType = "http://www.ccApplication.com/CuttingEdge.Security.IP";
        public const string IdClaimType = "http://www.ccApplication.com/CuttingEdge.Security.Id";

        public ccIdentity(IEnumerable<Claim> claims, string authenticationType)
            : base(claims, authenticationType: authenticationType)
        {
            AddClaims(from @group in claims where @group.Type == GroupClaimType select @group);
            AddClaims(from role in claims where role.Type == RoleClaimType select role);
            AddClaims(from ip in claims where ip.Type == IPClaimType select ip);
            AddClaims(from id in claims where id.Type == IdClaimType select id);
        }

        public ccIdentity(IEnumerable<string> roles, IEnumerable<string> groups, string ip, int id)
        {
            AddClaims(from @group in groups select new Claim(GroupClaimType, @group));
            AddClaims(from role in roles select new Claim(RoleClaimType, role));
            AddClaim(new Claim(IPClaimType, ip));
            AddClaim(new Claim(IdClaimType, id.ToString()));
        }

        public IEnumerable<string> Roles
        {
            get
            {
                return from claim in FindAll(RolesClaimType) select claim.Value;
            }
        }
        public IEnumerable<string> Groups
        {
            get
            {
                return from grp in FindAll(GroupClaimType) select grp.Value;
            }
        }

        public int Id
        {
            get
            {
                return Convert.ToInt32(FindFirst(IdClaimType).Value);
            }
        }

        public string IP
        {
            get
            {
                return FindFirst(IPClaimType).Value;
            }
        }
    }

    public class ccClaim : Claim
    {
        private string type;
        private UserModel userData;
        public ccClaim(string type, string value)
            : base(type, value)
        {

        }

        public ccClaim(string type, UserModel userData)
            : base(type, userData.UserId.ToString())
        {
            this.type = type;
            this.userData = userData;
        }

    }
}
