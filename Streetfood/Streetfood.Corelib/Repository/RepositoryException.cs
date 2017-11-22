using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.Repository
{
    [Serializable]
    public class RepositoryException : CoreException
    {
        public override int InternalExceptionCode
        {
            get
            {
                return CoreException.RepositoryExpectionCode;
            }
        }

        public RepositoryException(string message)
            : base(message)
        {

        }
    }
}
