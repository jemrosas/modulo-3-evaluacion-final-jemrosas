import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import logo from '../images/Rick_and_Morty_Logo.png';
import CharacterList from './CharacterList';
import receiveApiData from '../services/receiveApiData';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    receiveApiData().then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className='App'>
      <header>
        <div className='logo'>
          <img src={logo} alt='Logo de Rick y Morty' />
        </div>
      </header>
      <CharacterList charactersInfo={data} />
    </div>
  );
};

export default App;
