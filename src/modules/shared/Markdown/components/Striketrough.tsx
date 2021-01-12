import React from 'react';

type Props = {
  value: string;
};
const Striketrough: React.FC<Props> = ({node,...props}:any) => {
  const { value } = props;
  return (
    <div className="blogDelete" {...props}>
      {value}
    </div>
  );
};

export default Striketrough;
