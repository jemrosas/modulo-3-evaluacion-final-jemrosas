import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.characterInfo.id}`} replace>
      <li className='card'>
        <div className='card_container-img'>
          <img className='card_img' src={props.characterInfo.image} alt={`${props.characterInfo.name}'s portrait`} />
        </div>
        <div className='card_text'>
          <h3 className='text_title'>{props.characterInfo.name}</h3>
          <p className='text_paragraph'>{props.characterInfo.specie}</p>
          <p className='text_paragraph'>{props.characterInfo.planet}</p>
        </div>
      </li>
    </Link>
  );
};
export default CharacterCard;

CharacterCard.protoTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  specie: PropTypes.string,
  planet: PropTypes.string,
};
