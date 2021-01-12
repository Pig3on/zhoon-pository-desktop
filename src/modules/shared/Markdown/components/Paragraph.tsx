import React from 'react';

type Props = {
  children: React.ReactNode;
};
const Paragraph: React.FC<Props> = ({node,...props}:any) => {
  return <p className="blogParagraph" {...props} />;
};

export default Paragraph;
