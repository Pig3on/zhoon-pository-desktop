import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
  language: string;
  value: any;
};

const Code: React.FC<Props> = (props) => {
  const { language, value } = props;
  let safeValue = value;
  if (!value) {
    safeValue = '';
  }
  return (
    <SyntaxHighlighter language={language}>
      {safeValue}
    </SyntaxHighlighter>
  );
};

export default Code;
