using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib.Repository
{
    public class EntityConflictException : EntityException
    {
        public override int InternalExceptionCode
        {
            get
            {
                return CoreException.EntityConflictExceptionCode;
            }
        }

        public EntityConflictException(object entity, string message) : base(entity, message)
        {
        }

        public EntityConflictException(object entity, string message, Exception inner) : base(entity, message, inner)
        {
        }
    }
}
