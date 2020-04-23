import React from 'react';
import '../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  return (
    <li className='card'>
      <div className='card_container-img'>
        <img className='card_img' src={props.characterInfo.image} alt={`Imagen de ${props.characterInfo.name}`} />
      </div>
      <div className='card_text'>
        <h3 className='text_title'>{props.characterInfo.name}</h3>
        <p className='text_paragraph'>{props.characterInfo.specie}</p>
        <p className='text_paragraph'>{props.characterInfo.planet}</p>
      </div>
    </li>
  );
};
export default CharacterCard;
