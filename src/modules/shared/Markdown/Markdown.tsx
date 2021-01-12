import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import Heading from './components/Heading';
import Strong from './components/Strong';
import Break from './components/Break';
import Paragraph from './components/Paragraph';
import ThematicBreak from './components/ThematicBreak';
import Blockquote from './components/Blockquote';
import Striketrough from './components/Striketrough';
import Link from './components/Link';
import Image from './components/Image';
import './Markdown.css';
import Code from './components/Code';
import List from './components/List';
import ListItem from './components/ListItem';
import { CircularProgress } from '@material-ui/core';
/*


supported
root - Root container element that contains the rendered markdown✅
text - Text rendered inside of other elements, such as paragraphs✅
break - Hard-break (<br>)✅
paragraph - Paragraph (<p>)✅
emphasis - Emphasis (<em>)
strong - Strong/bold (<strong>)✅
thematicBreak - Horizontal rule / thematic break (<hr>)✅
blockquote - Block quote (<blockquote>)✅
delete - Deleted/strike-through (<del>)✅
link - Link (<a>)✅
image - Image (<img>)✅
linkReference - Link (through a reference) (<a>)
imageReference - Image (through a reference) (<img>)
table - Table (<table>)✅
tableHead - Table head (<thead>)✅
tableBody - Table body (<tbody>)✅
tableRow - Table row (<tr>)✅
tableCell - Table cell (<td>/<th>)✅
list - List (<ul>/<ol>)✅
listItem - List item (<li>)✅
definition - Definition (not rendered by default)✅
heading - Heading (<h1>-<h6>)✅
inlineCode - Inline code (<code>)✅
code - Block of code (<pre><code>)✅
html - HTML node (Best-effort rendering) will not be used
virtualHtml - When not using the HTML parser plugin, a cheap and dirty approach to supporting simple HTML elements without a complete parser.
parsedHtml - When using the HTML parser plugin, HTML parsed to a React element.
 */

const createStyledComponent = (className: any) => {
return ({node, ...props}:any) => {
    return <div className={className} {...props} />;
  };
};

const renderers = {
    root: createStyledComponent('blogRoot'),
    text: createStyledComponent('blogText'),
    heading: Heading,
    strong: Strong,
    break: Break,
    paragraph: Paragraph,
    thematicBreak: ThematicBreak,
    blockquote: Blockquote,
    delete: Striketrough,
    link: Link,
    image: Image,
    table: createStyledComponent('table'),
    tableHead: createStyledComponent('tableHead'),
    tableBody: createStyledComponent('tableBody'),
    tableRow: createStyledComponent('tableRow'),
    tableCell: createStyledComponent('tableCell'),
    list: (props: any) => {
      return <List {...props} />;
    },
    listItem: (props: any) => {
      return <ListItem {...props} />;
    },
    code: (props: any) => {
      return <Code {...props} />;
    },
    inlineCode: createStyledComponent('inlineCode'),
  };

export interface Props {
  source: string;
  useFullScreen?: boolean;
}
export const Markdown: React.FC<Props> = ({ source, useFullScreen }) => {
  if (!source) {
    return <div className="blogRootFull">
      No Data Loaded
    </div>;
  }

  if (useFullScreen) {
    renderers.root = createStyledComponent('blogRootFull');
  }
  console.log(source)
  try {
    return (
      <ReactMarkdown
        source={source}
        plugins={[gfm]}
        renderers={renderers}
        sourcePos
        rawSourcePos
      />
    );
  } catch (e) {
    return <div className="blogRootFull">
      <CircularProgress color="secondary" />
    </div>;
  }
};
