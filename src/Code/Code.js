import React, { useEffect } from 'react';

import Prism from './prism';
import './prism.css';

export default ({ code, height, width }) => {
  useEffect(() => Prism.highlightAll(), [code]);
  return (
    <pre
      style={{
        overflow: 'scroll',
        height: height || '500px',
        width: width || '550px'
      }}>
      <code className="language-javascript">{code}</code>
    </pre>
  );
};
