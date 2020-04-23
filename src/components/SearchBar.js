import React from 'react';
import '../stylesheets/SearchBar.scss';

const SearchBar = () => {
  return (
    <form className='form' action=''>
      <label className='form_label' htmlFor='searchField'>
        <input className='form_input' type='text' name='searchField' id='searchField' placeholder='Insert character name'></input>
      </label>
    </form>
  );
};

export default SearchBar;
