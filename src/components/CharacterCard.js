import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link className='link' to={`/character/${props.characterInfo.id}`} replace>
      <li className='card'>
        <div className='card__container-img'>
          <img className='card__img' src={props.characterInfo.image} alt={`${props.characterInfo.name}'s portrait`} />
        </div>
        <div className='card__text'>
          <h3 className='card__text-title'>{props.characterInfo.name}</h3>
          <p className='card__text-paragraph'>{props.characterInfo.specie}</p>
          <p className='card__text-paragraph'>{props.characterInfo.planet}</p>
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
