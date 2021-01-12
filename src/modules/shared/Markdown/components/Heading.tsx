import React from 'react';

type Props = {
  level: number;
  children: React.ReactNode;
};

const resolveClass = (level: number) => {
  return `blogHeading${level}`;
};

const Heading: React.FC<Props> = ({node,...props}:any) => {
  const { children, level } = props;
  return (
    <p {...props} className={resolveClass(level)}>
      {children}
    </p>
  );
};

export default Heading;
