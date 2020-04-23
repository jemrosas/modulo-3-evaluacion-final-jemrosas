import React from 'react';
import '../stylesheets/CharacterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const charactersList = props.charactersInfo.map((card) => {
    return <CharacterCard className='characterCard' key={card.id} characterInfo={card} />;
  });

  return <ul className='charactersList'>{charactersList}</ul>;
};

export default CharacterList;
