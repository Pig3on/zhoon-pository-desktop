import React from 'react';

const List = ({node,...props}:any) => {
  const { ordered } = props;
  if (ordered) {
    return <ol className="orderedList" {...props} />;
  }
  return <ul className="unorderedList" {...props} />;
};

export default List;
