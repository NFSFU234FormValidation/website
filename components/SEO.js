// import Head from 'next/head';
// import PropTypes from 'prop-types';

// const SEO = ({ title, description, url, image }) => (
//   <Head>
//     <title>{title} | My Site</title>
//     <meta name="description" content={description} />
//     <meta property="og:title" content={title} />
//     <meta property="og:description" content={description} />
//     {url && <meta property="og:url" content={url} />}
//     {image && <meta property="og:image" content={image} />}
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta name="twitter:title" content={title} />
//     <meta name="twitter:description" content={description} />
//     {image && <meta name="twitter:image" content={image} />}
//   </Head>
// );

// SEO.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   url: PropTypes.string,
//   image: PropTypes.string,
// };

// export default SEO;


import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({
  title = '',
  description = 'NFSFU234FormValidation is a lightweight and user-friendly JavaScript library designed for validating HTML form elements, with a special emphasis on textarea fields. It offers customizable validation messages, comprehensive support for required field checks, seamless inline error displays, and convenient modal error notifications.',
  url = '',
  image = '/nforshifu234_dev_dark_logo.png',
  author = 'NFORSHIFU234Dev',
  keywords = 'NFSFU234FormValidation Library, nforshifu234dev, nfsfu234, nforshifu234dev projects, nfsfu234dev, nfsfu234dev projects, nfsfu234dev projects, nfsfu234dev projects, nfsfu234dev projects, nfsfu234dev projects, form, form validation, form validation, validation, validation, validation, validation, validation',
  canonicalUrl = '',
  robotsContent = 'index, follow'
}) => {
  // Set default title
  const defaultTitle = 'NFSFU234FormValidation Library';
  const fullTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;

  return (
    <Head>
      {/* Basic SEO Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl || url} />
      
      {/* Open Graph (Facebook) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NFSFU234FormValidation Library" />
      {author && <meta property="og:author" content={author} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:site" content="@nforshifu234dev" />
      <meta name="twitter:creator" content="@nforshifu234dev" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={robotsContent} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Favicon */}
      <link rel="shortcut icon" href="/NFSFU234FormValidation-logo.png" type="image/x-icon" />

      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/icons/icon-192x192.png" />
      
      {/* Open Graph Locale */}
      <meta property="og:locale" content="en_US" />
      
      {/* Facebook App ID (if applicable) */}
      <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  robotsContent: PropTypes.string,
};

export default SEO;
