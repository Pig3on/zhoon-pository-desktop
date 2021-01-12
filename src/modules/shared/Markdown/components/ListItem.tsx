import React from 'react';

const ListItem = ({node,...props}:any) => {
  return <li className="listItem" {...props} />;
};

export default ListItem;
