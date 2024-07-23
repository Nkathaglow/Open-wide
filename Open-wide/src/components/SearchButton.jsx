import { useState } from 'react';

const SearchButton = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div>
      <input
        className='search-input'
        placeholder='Search here...'
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        aria-label='Search'
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchButton;
