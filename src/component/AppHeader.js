import React from 'react';
import SearchBar from './SearchBar';

function AppHeader({ keyword, onSearchChange }) {
    return (
        <header className='note-app__header'>
            <h1><i className='fa fa-sticky-note'></i> Catatanku</h1>
            <SearchBar keyword={keyword} onSearchChange={onSearchChange} />
        </header>
    )
}

export default AppHeader;