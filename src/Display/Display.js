import React from 'react';
import './Display.css';

const Display = (props) => {
  return (
    <div className='display'>
      <div className='text'>
        {typeof props.data === 'undefined' ||
        props.data === '' ||
        (Array.isArray(props.data) && props.data.length === 0)
          ? '0'
          : props.data.join('')}
      </div>
    </div>
  );
};

export default Display;
