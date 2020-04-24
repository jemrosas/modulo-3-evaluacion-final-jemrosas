import React from 'react';
import '../stylesheets/Warning.scss';
import image from '../images/clipart.png';

const Warning = () => {
  return (
    <li className='warning'>
      <p className='warning__text'>Ooopsie!! Looks like something went wrong, please try another search.</p>
      <img className='warning__image' src={image} alt='Something went wrong' />
    </li>
  );
};

export default Warning;
