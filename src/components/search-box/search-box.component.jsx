import React from 'react';

import './search-box.styles.css';
/* component driven style, functional components*/
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);