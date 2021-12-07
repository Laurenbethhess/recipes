import * as React from "react";
import {useState}  from 'react';

function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  const resetInputField = () => {
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search recipes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br/>
      <button type="submit">Search</button>
      <button onClick={resetInputField}>Reset</button>
    </form>
  );
}

export default Search;