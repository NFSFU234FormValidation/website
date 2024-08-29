import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const RelatedLinks = ({ items }) => {

    if ( ! items )
        return null;

    if ( typeof items !== 'object' )
        return null;

  return (
    <div className="mt-8">
      <h3 className="mb-6 text-2xl font-semibold text-gray-800">📚 Related Resources</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {items.map((item, index) => (
          <Link 
            key={index} 
            href={item.link} 
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-200 group"
          >
            <h4 className="mb-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
              {item.title}
            </h4>
            <p className="text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

RelatedLinks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RelatedLinks;