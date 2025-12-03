import React from "react";

const JsonLdSchema = ({ schemaData }) => {

  const jsonLd = JSON.stringify(schemaData);


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default JsonLdSchema;
