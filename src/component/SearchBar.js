import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  const locale = localStorage.getItem('locale');

  return (
    <input
      className="search-bar"
      type="text"
      placeholder={
        locale === 'id'
          ? 'Cari catatanmu di sini ...'
          : 'Search your notes here ...'
      }
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
