import React from 'react';

const SearchBar = () => {
  return <section>
    <div>
      <input
        type="text"
        placeholder="e.g Mikey Mouse"
      />
      <input
        type="button"
        value="Buscar"
      />
    </div>
  </section>;
};

export default SearchBar;
