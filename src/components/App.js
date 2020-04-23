import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import logo from '../images/Rick_and_Morty_Logo.png';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import receiveApiData from '../services/receiveApiData';
// import CharacterDetail from './CharacterDetail';

const App = () => {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  console.log('search', searchFilter);

  useEffect(() => {
    receiveApiData().then((data) => setData(data));
  }, []);

  const handleSearch = (data) => {
    setSearchFilter(data.value);
  };

  const filterCharacters = data

    .filter((character) => character.name.toUpperCase().includes(searchFilter))

    .sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className='App'>
      <header>
        <div className='logo'>
          <img src={logo} alt='Rick and Morty logo' />
        </div>
      </header>
      <SearchBar handleSearch={handleSearch} />
      <CharacterList charactersInfo={filterCharacters} />
      {/* <CharacterDetail/> */}
    </div>
  );
};

export default App;
