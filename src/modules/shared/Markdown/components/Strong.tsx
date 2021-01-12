import React from 'react';

type Props = {
  value: string;
};
const Strong: React.FC<Props> = ({ value }) => {
  return <strong className="blogStrong">{value}</strong>;
};

export default Strong;
