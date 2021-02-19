import React, { useEffect, useState } from 'react';
import './Search.css';
import getWeather from './../../api/getWeather';

const Search = () => {
  const [term, setTerm] = useState('');
  const [weather, setWeather] = useState({});
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      const fetchData = async () => {
        if (term) {
          const data = await getWeather(term);
          setWeather(data.data);
          console.log(weather);
        }
      };

      fetchData();
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [term]);

  return (
    <div className="search-container">
      <input
        onChange={onInputChange}
        className="city-input"
        type="text"
        placeholder="Enter a City Name"
      />
    </div>
  );
};

export default Search;
