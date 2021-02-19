import React, { useEffect, useState } from 'react';
import './Search.css';

const Search = (props) => {
  const [term, setTerm] = useState('');

  const onTermChange = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const timeID = setTimeout(() => {
      if (term) {
        props.exchangeTerm(term);
      }
    }, 500);

    return () => {
      clearTimeout(timeID);
    };
  }, [term]);
  return (
    <div className="search-container">
      <input
        onChange={onTermChange}
        className="city-input"
        type="text"
        placeholder="City Name"
      />
    </div>
  );
};

export default Search;
