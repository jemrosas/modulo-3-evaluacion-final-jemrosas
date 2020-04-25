import React from 'react';
import '../stylesheets/SearchBar.scss';

const SearchBar = (props) => {
  const handleChange = (ev) => {
    props.handleSearch({
      value: ev.target.value.toUpperCase(),
    });
  };

  const handleSubmit = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  };

  return (
    <form className='form' action=''>
      <label className='form__label' htmlFor='searchField'>
        <input className='form__input' type='text' name='searchField' id='searchField' placeholder='Insert character name' onChange={handleChange} onKeyPress={handleSubmit} autoComplete='off'></input>
      </label>
    </form>
  );
};

export default SearchBar;
