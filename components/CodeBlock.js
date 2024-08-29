"use client"
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState('');
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      setText(codeRef.current.innerText);
    }
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds
  };

  // Convert children to string if it is not already
  const textContent = typeof children === 'string' ? children : children.props.children;

  // If the content is empty, do not render the component
  if (!textContent) {
    return null;
  }

  return (
    <div className="relative bg-gray-100 p-4 rounded-md  ml-2 text-gray-500 my-3">
      <div className='overflow-x-auto scrollbar-thin'>
        <pre className="text-sm leading-8" ref={codeRef}>
          <code>{textContent}</code>
        </pre>
      </div>
      <CopyToClipboard text={textContent} onCopy={handleCopy}>
        <button
          className={`absolute top-2 right-2 rounded-md transition-colors py-1 px-3 text-white ${
            copied ? 'bg-green-500' : 'bg-black bg-opacity-90'
          } hover:${copied ? 'bg-green-600' : 'bg-black bg-opacity-100'}`}
          
        >
          {copied ? 'Copied!' : <FontAwesomeIcon icon={faClipboard} />}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBlock;
