
// components/Heading.js
import React from 'react';
import clsx from 'clsx';

const Heading = ({ level, children, className }) => {
  const Tag = `h${level}`;

  const baseStyles = 'font-bold tracking-tight text-gray-900 dark:text-gray-100';
  const sizeStyles = {
    h1: 'text-3xl leading-10 sm:text-4xl sm:leading-12 md:text-5xl md:leading-14',
    h2: 'text-2xl leading-9 sm:text-3xl sm:leading-10 md:text-4xl md:leading-12',
    h3: 'text-xl leading-8 sm:text-2xl sm:leading-9 md:text-3xl md:leading-10',
    h4: 'text-lg leading-7 sm:text-xl sm:leading-8 md:text-2xl md:leading-9',
    h5: 'text-base leading-6 sm:text-lg sm:leading-7 md:text-xl md:leading-8',
    h6: 'text-sm leading-5 sm:text-base sm:leading-6 md:text-lg md:leading-7',
  };

  return (
    <Tag className={clsx(baseStyles, sizeStyles[Tag], className)}>
      {children}
    </Tag>
  );
};

const Headings = {
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  h6: (props) => <Heading level={6} {...props} />,
};

export default Headings;
