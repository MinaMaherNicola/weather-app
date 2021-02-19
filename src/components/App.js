import React from 'react';
import Search from './Search/Search';

const App = () => {
  return (
    <div>
      <div className="bg"></div>
      <div className="container">
        <h1 className="main-heading">How is the weather today?</h1>
        <div className="search-result-container">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default App;
