using System;
using System.Collections.Generic;
using System.Text;

namespace Streetfood.Corelib
{
    public interface IEntity
    {
        /// <summary>
        /// Gets or sets the Id.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        string Id { get; set; }

        /// <summary>
        /// Gets or sets the created date.
        /// </summary>
        /// <value>
        /// The created date.
        /// </value>
        DateTime CreatedDate { get; set; }

        /// <summary>
        /// Gets or sets the updated date.
        /// </summary>
        /// <value>
        /// The updated date.
        /// </value>
        DateTime UpdatedDate { get; set; }

        /// <summary>
        /// Gets or sets the metadata.
        /// </summary>
        /// <value>
        /// The metadata.
        /// </value>
        IDictionary<string, object> Metadata { get; set; }


        /// <summary>
        /// Gets or sets the version.
        /// </summary>
        /// <value>
        /// The version.
        /// </value>
        long Version { get; set; }
    }
}
