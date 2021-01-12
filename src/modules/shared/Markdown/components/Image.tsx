import React from 'react';

const Image = ({node,...props}:any) => {
  return <img {...props} className="blogImage" alt="in blog" />;
};

export default Image;
