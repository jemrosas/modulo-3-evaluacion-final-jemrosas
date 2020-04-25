import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import logo from '../images/Rick_and_Morty_Logo.png';
import SearchBar from './SearchBar';
import Loading from './Loading';
import CharacterList from './CharacterList';
import receiveApiData from '../services/receiveApiData';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    receiveApiData()
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []);

  const handleSearch = (data) => {
    setSearchFilter(data.value);
  };

  const filterCharacters = data

    .filter((character) => character.name.toUpperCase().includes(searchFilter))

    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const renderCharacterDetail = (routerProps) => {
    const clickedCharacter = parseInt(routerProps.match.params.id);
    const foundCharacter = data.find((character) => {
      return character.id === clickedCharacter;
    });
    return <CharacterDetail characterInfo={foundCharacter} />;
  };

  return (
    <div className='App'>
      <header>
        <div className='logo'>
          <img src={logo} alt='Rick and Morty logo' />
        </div>
      </header>
      <SearchBar handleSearch={handleSearch} />
      <Loading loading={loading} />
      <CharacterList charactersInfo={filterCharacters} />
      <Switch>
        <Route path='/character/:id' render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
