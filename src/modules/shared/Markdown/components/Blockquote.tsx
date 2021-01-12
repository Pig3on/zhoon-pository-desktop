import React from 'react';

type Props = {
  node: any,
  value: string;
};

const Blockquote: React.FC<Props> = ({node,...props}) => {
  return <blockquote className="blogBlockQuote" {...props} />;
};

export default Blockquote;
