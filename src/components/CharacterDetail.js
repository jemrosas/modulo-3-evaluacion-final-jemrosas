import React from 'react';
import PropTypes from 'prop-types';
// import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  return (
    <div className='modal'>
      <div className='modal_img'>
        <img src={props.characterInfo.image} alt={`${props.characterInfo.name}'s portrait`} />
      </div>
      <div className='modal_text'>
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
    </div>
  );
};
export default CharacterDetail;

CharacterDetail.protoTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  specie: PropTypes.string,
  planet: PropTypes.string,
  episodes: PropTypes.array,
};
