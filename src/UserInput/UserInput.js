import React from 'react';
import { useEffect } from 'react';
import styles from './UserInput.css';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'buttonBlock',
      isValid: true,
      text: 'hello',
    };
  }
  // useEffect(()=>{
  //     console.log("in here")
  // });
  componentDidMount() {
    console.log(this.state);
    // styles.button.display = 'block';
  }
  componentDidUpdate() {
    console.log('Did update', this.state);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <>
        <div className='buttonBlock' onClick={this.props.onClick}>
          <span>{this.props.text}</span>
        </div>
      </>
    );
  }
}

export default UserInput;
