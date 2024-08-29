"use client";
import { useRef, useEffect } from 'react';
import { useSearch } from '../context/SearchContext';
import { useActionKey } from '@/hooks/useActionKey'; // Import your useActionKey hook

const SearchButton = ({ children, ...props }) => {
  const searchButtonRef = useRef();
  const actionKey = useActionKey();
  const { onOpen, onInput } = useSearch();

  useEffect(() => {
    function onKeyDown(event) {
      if (searchButtonRef.current === document.activeElement && /[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
        onInput(event);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onInput]);

  return (
    <button type="button" ref={searchButtonRef} onClick={onOpen} {...props}>
      {typeof children === 'function' ? children({ actionKey }) : children}
    </button>
  );
};

export default SearchButton;
