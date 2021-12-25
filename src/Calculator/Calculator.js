import React, { useState } from 'react';
import './Calculator.css';

import Display from '../Display/Display';
import Key from '../Key/Key';

let data = [
  'AC',
  'Clear',
  '%',
  '/',
  7,
  8,
  9,
  '*',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  'ACD',
  0,
  '.',
  '=',
];

const Calculator = () => {
  const [expression, setExpression] = useState([]);

  const updateDisplay = (char) => {
    switch (char) {
      case 'Clear': {
        let arr = [...expression];
        if (!Array.isArray(arr)) {
          let exp = arr.toString();
          arr = exp.split('');
        }
        arr.pop();
        setExpression(arr);
        break;
      }
      case 'AC': {
        setExpression([]);
        break;
      }
      case '=': {
        let exp = eval(expression.join(''));
        exp = Math.round((exp + Number.EPSILON) * 100) / 100;
        let arr = [exp];
        setExpression(arr);
        break;
      }
      default: {
        let array = [...expression];
        array.push(char);
        setExpression(array);
        break;
      }
    }
  };

  return (
    <div className='container'>
      <div className='mainBlock'>
        <Display data={expression} className='ml-1' />
        <div className='keys row mx-0'>
          {data.map((char, index) => {
            // console.log(data);
            return (
              <Key
                key={index}
                char={char}
                onChangeHandler={() => updateDisplay(char)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
