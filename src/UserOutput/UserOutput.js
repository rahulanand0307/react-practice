import React from 'react';

const userOutput = (props) => {

  const style = {
    width: '60%',
    padding: '16px',
    margin: '16px',
    border: '2px solid black',
    backgroundColor: '#ccc',
    textAling: 'center'
  }

  return (
    <div style={style}>
      <p>User Name: {props.userName}</p>
      <p>Some other text</p>
    </div>
  );

}

export default userOutput;
