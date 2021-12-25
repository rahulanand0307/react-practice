import React from 'react';
import './Key.css';

const Key = (props) => {
  // console.log(props);
  return (
    <div className='keyContainer col-3 ripple' onClick={props.onChangeHandler}>
      <div className='key'>{props.char}</div>
    </div>
  );
};

export default Key;
