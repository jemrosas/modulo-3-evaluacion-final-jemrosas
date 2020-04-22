import React from 'react';
import '../stylesheets/App.scss';
import logo from '../images/Rick_and_Morty_Logo.png';
import CharacterList from './CharacterList';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='logo'>
          <img src={logo} alt='Logo de Rick y Morty' />
        </div>
      </header>
      <CharacterList />
    </div>
  );
}

export default App;
