import React, { useState } from 'react';
import Search from './Search/Search';
import DisplayWeather from './DisplayWeather/DisplayWeather';
import getWeather from './../api/getWeather';

const App = () => {
  const [weather, setWeather] = useState(null);

  const exchangeTerm = (term) => {
    const fetchData = async (term) => {
      const response = await getWeather(term);
      setWeather(response.data);
    };
    fetchData(term);
  };
  return (
    <div>
      <div className="bg"></div>
      <div className="container">
        <h1 className="main-heading">How's the weather today?</h1>
        <div className="search-result-container">
          <Search exchangeTerm={exchangeTerm} />
          <DisplayWeather weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default App;
