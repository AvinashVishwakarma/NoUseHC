using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace HappyClasses.Model
{
    public class UserRole
    {        
        public int Id { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }
    }
    public class UserRoleStore : IUserRoleStore<UserRole>
    {
        Task IUserRoleStore<UserRole>.AddToRoleAsync(UserRole user, string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<IdentityResult> IUserStore<UserRole>.CreateAsync(UserRole user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<IdentityResult> IUserStore<UserRole>.DeleteAsync(UserRole user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<UserRole> IUserStore<UserRole>.FindByIdAsync(string userId, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<UserRole> IUserStore<UserRole>.FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<string> IUserStore<UserRole>.GetNormalizedUserNameAsync(UserRole user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<IList<string>> IUserRoleStore<UserRole>.GetRolesAsync(UserRole user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<string> IUserStore<UserRole>.GetUserIdAsync(UserRole user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<string> IUserStore<UserRole>.GetUserNameAsync(UserRole user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<IList<UserRole>> IUserRoleStore<UserRole>.GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<bool> IUserRoleStore<UserRole>.IsInRoleAsync(UserRole user, string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task IUserRoleStore<UserRole>.RemoveFromRoleAsync(UserRole user, string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task IUserStore<UserRole>.SetNormalizedUserNameAsync(UserRole user, string normalizedName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task IUserStore<UserRole>.SetUserNameAsync(UserRole user, string userName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        Task<IdentityResult> IUserStore<UserRole>.UpdateAsync(UserRole user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~UserRoleStore() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        void IDisposable.Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}
