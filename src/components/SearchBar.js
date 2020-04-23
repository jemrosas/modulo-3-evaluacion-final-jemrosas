import React from 'react';
import '../stylesheets/SearchBar.scss';

const SearchBar = (props) => {
  const handleChange = (ev) => {
    props.handleSearch({
      value: ev.target.value.toUpperCase(),
    });
  };
  return (
    <form className='form' action=''>
      <label className='form_label' htmlFor='searchField'>
        <input className='form_input' type='text' name='searchField' id='searchField' placeholder='Insert character name' onChange={handleChange} autocomplete='off'></input>
      </label>
    </form>
  );
};

export default SearchBar;
