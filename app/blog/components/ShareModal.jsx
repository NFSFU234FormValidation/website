'use client';

import { useState, useEffect, useCallback } from 'react';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaWhatsapp, FaRedditAlien, FaClipboard, FaVolumeUp, FaVolumeMute, FaShareAlt } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';

const ShareModal = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const articleTitle = title || "Blog Post - NFSFU234FormValidation Library";
  const articleDescription = description || "A blog from NFSFU234FormValidation Library";

  const [shareUrl, setShareUrl] = useState('');
  const [shareTitle, setShareTitle] = useState('');
  const [shareDescription, setShareDescription] = useState('');

  const readAloud = useCallback(() => {
    if (typeof window !== 'undefined') {
      const blogElement = document.getElementById('coreBlog');
      if (blogElement) {
        const text = blogElement.innerText;
        if (!isReading) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.onend = () => {
            setIsReading(false);
            localStorage.setItem('isReading', 'false');
          };
          speechSynthesis.speak(utterance);
          setIsReading(true);
          localStorage.setItem('isReading', 'true');
        } else {
          speechSynthesis.cancel();
          setIsReading(false);
          localStorage.setItem('isReading', 'false');
        }
      } else {
        console.error('Element with id "coreBlog" not found');
      }
    }
  }, [isReading]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedReadingState = localStorage.getItem('isReading');
      if (storedReadingState === 'true') {
        readAloud();
      }

      setShareUrl(encodeURIComponent(window.location.href));
      setShareTitle(encodeURIComponent(articleTitle));
      setShareDescription(encodeURIComponent(articleDescription));

      return () => {
        if (typeof speechSynthesis !== 'undefined') {
          speechSynthesis.cancel();
        }
        localStorage.setItem('isReading', 'false');
      };
    }
  }, [articleTitle, articleDescription, readAloud]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (typeof window !== 'undefined') {
      const shareText = `${articleTitle}\n\n${articleDescription}\n\n${window.location.href}`;
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    { icon: FaTwitter, url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}:%20${shareDescription}`, color: '#1DA1F2' },
    { icon: FaLinkedinIn, url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}&summary=${shareDescription}`, color: '#0077B5' },
    { icon: FaFacebookF, url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareTitle}:%20${shareDescription}`, color: '#1877F2' },
    { icon: FaWhatsapp, url: `https://wa.me/?text=${shareTitle}%20${shareDescription}%20${shareUrl}`, color: '#25D366' },
    { icon: SiDevdotto, url: `https://dev.to/new?prefill=---%0Atitle: ${shareTitle}%0Apublished: false%0Atags: webdev%0A---%0A%0A${shareDescription}%0A%0A${shareUrl}`, color: '#0A0A0A' },
    { icon: FaRedditAlien, url: `https://reddit.com/submit?url=${shareUrl}&title=${shareTitle}`, color: '#FF4500' },
  ];

  return (
    <div className="relative">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={readAloud}
          className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-full"
        >
          {isReading ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
        </button>
        <button
          onClick={handleOpen}
          className="flex items-center justify-center w-10 h-10 text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-full"
        >
          <FaShareAlt size={20} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClose}>
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300 text-2xl">
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Share This Article</h2>
            <p className="text-gray-600 mb-6">{articleTitle}</p>
            <div className="flex flex-col space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 text-white transition-colors duration-300 rounded-lg"
                    style={{ backgroundColor: link.color }}
                  >
                    <link.icon size={24} />
                    <span className="text-xs mt-1">{link.icon.name.replace('Fa', '').replace('Si', '')}</span>
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
                <input
                  type="text"
                  readOnly
                  value={`${articleTitle} - ${typeof window !== 'undefined' ? window.location.href : ''}`}
                  className="flex-1 bg-transparent p-2 focus:outline-none text-gray-700 text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-800 transition-colors duration-300 rounded-full hover:bg-gray-200"
                >
                  {copied ? (
                    <span className="text-green-600">✓</span>
                  ) : (
                    <FaClipboard size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareModal;
