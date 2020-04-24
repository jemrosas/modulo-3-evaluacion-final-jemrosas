import React from 'react';
import '../stylesheets/CharacterList.scss';
import CharacterCard from './CharacterCard';
import Warning from './Warning';

const CharacterList = (props) => {
  const charactersList = props.charactersInfo.map((card) => {
    return <CharacterCard className='characterCard' key={card.id} characterInfo={card} />;
  });

  if (charactersList.length === 0) {
    return <Warning />;
  }

  return <ul className='charactersList'>{charactersList}</ul>;
};

export default CharacterList;
