﻿using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib
{
    public class Entity: IEntity
    {
        [BsonId]
        public string Id { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }

        public long Version { get; set; }

        public IDictionary<string, object> Metadata { get; set; }

        public Entity()
        {
            this.Metadata = new Dictionary<string, object>();
        }
    }
}
