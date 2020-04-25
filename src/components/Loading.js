import React from 'react';
import '../stylesheets/Loading.scss';
import loadVortex from '../images/vortex.png';

const Loading = (props) => {
  if (props.loading) {
    return (
      <div className='loading'>
        <img src={loadVortex} alt='Spinning vortex' />
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;
