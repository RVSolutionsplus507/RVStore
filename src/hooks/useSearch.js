import { useState, useEffect, useRef } from 'react';

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const initial = useRef(true);

    useEffect(() => {
    if (initial.current) {
      initial.current = search === ""
      return;
    }
    if (search === "") {
      setError('You Cannot Search for an Empty String');
    return;
    }

    if (search.length < 3) {
      setError('Search string must be at least 3 characters long');
    return;
    }

    if (search.match(/[^a-zA-Z\s]/)) {
      setError('Search string must contain only alphabetic characters');
      return;
    }

    setError(null);
    }, [search]);


  return {
    search,
    error,
    setSearch
  };
}

export { useSearch };