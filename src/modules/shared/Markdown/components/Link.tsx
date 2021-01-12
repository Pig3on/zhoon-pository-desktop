import React from 'react';

type Props = {
  href: string;
};
const Link: React.FC<Props> = ({node,...props}:any) => {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} aria-hidden="true" className="blogLink" />;
};

export default Link;
