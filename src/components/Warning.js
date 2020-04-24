import React from 'react';
import image from '../images/clipart.png';

const Warning = () => {
  return (
    <li>
      <p>Ooopsie!!</p>
      <img src={image} alt='Something went wrong' />
    </li>
  );
};

export default Warning;
