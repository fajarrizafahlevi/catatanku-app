import React from 'react';

// * TODO: Memanfaatkan controlled component dalam membangun fitur pencarian catatan
function SearchBar({ keyword, onSearchChange }) {
    return (
        <section className='search-bar' >
            <input
                className='search-bar__input'
                type="text"
                placeholder="Cari catatanmu ..."
                value={keyword}
                onChange={(event) => onSearchChange(event)}
            />
        </section>
    );
}

export default SearchBar;