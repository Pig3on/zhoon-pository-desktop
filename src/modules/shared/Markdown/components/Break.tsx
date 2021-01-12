import React from 'react';

const Break: React.FC = ({node,...props}:any) => {
  return <br className="blogBreak" {...props} />;
};

export default Break;
