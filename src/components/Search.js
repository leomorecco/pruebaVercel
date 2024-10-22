import React, { useState } from 'react';
import '../Style/Search.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input className="search-input"
        type="text"
        placeholder="Buscar por descripción"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Search;