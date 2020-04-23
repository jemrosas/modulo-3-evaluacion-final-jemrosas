import React from 'react';

const CharacterDetail = (props) => {
  return (
    <li className='card'>
      <div className='card_img'>
        <img src={props.characterInfo.image} alt={`${props.characterInfo.name}'s portrait`} />
      </div>
      <div className='card_text'>
        <h3>{props.characterInfo.name}</h3>
        <p>
          <span className='text_property'>Status: </span>
          <span>{props.characterInfo.status}</span>
        </p>
        <p>
          <span className='text_property'>Species: </span>
          <span>{props.characterInfo.specie}</span>
        </p>
        <p>
          <span className='text_property'>Origin: </span>
          <span>{props.characterInfo.planet}</span>
        </p>
        <p>
          <span className='text_property'>Episodes: </span>
          <span>{props.characterInfo.episodes.length}</span>
        </p>
      </div>
    </li>
  );
};
export default CharacterDetail;
