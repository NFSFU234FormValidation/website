import React from 'react';
import clsx from 'clsx';

/**
 * Renders a paragraph element with customizable styling.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The content to be rendered inside the paragraph.
 * @param {string} [props.className] - Additional custom classes to apply to the paragraph.
 * @return {JSX.Element} The rendered paragraph element.
 */
const Paragraph = ({ children, className }) => {
  return (
    <p className={clsx("text-base leading-6 text-gray-900 dark:text-gray-100 sm:text-lg sm:leading-7 md:text-[14px] md:leading-8", className)}>
      {children}
    </p>
  );
};

export default Paragraph;
