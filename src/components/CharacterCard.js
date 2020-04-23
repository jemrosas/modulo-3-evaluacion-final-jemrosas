import React from 'react';

const CharacterCard = (props) => {
  return (
    <li className='card'>
      <div className='card_img'>
        <img src={props.characterInfo.image} alt={`Imagen de ${props.characterInfo.name}`} />
      </div>
      <div className='card_text'>
        <h3>{props.characterInfo.name}</h3>
        <p className='text_paragraph'>{props.characterInfo.specie}</p>
        <p className='text_paragraph'>{props.characterInfo.planet}</p>
      </div>
    </li>
  );
};
export default CharacterCard;
