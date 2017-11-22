using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.Repository
{
    public class EntityDuplicateException : EntityException
    {
        public override int InternalExceptionCode
        {
            get
            {
                return CoreException.EntityDuplicateExpectionCode;
            }
        }

        public EntityDuplicateException(object entity, string message) : base(entity, message)
        {
        }

        public EntityDuplicateException(object entity, string message, Exception inner) : base(entity, message, inner)
        {
        }
    }
}
