import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');
  const [lastOperand, setLastOperand] = useState('');

  const inputNumber = (number) => {
    if (currentValue.length >= 9) return; // ถ้า currentValue มีตัวเลขครบ 9 ตัว จะไม่เพิ่มเข้าไปอีก
    setCurrentValue((prev) => prev + number);
  };

  const handleOperator = (op) => {
    if (currentValue === '') return;
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('');
  };

  const calculate = () => {
    if (currentValue === '') {
      setCurrentValue(lastOperand);
    } else {
      setLastOperand(currentValue);
    }

    let result;
    switch (operator) {
      case '+':
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case '-':
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      default:
        return;
    }

    setCurrentValue(result.toString());
    setPreviousValue(result.toString());
  };

  const clearDisplay = () => {
    setCurrentValue('');
    setPreviousValue('');
    setOperator('');
    setLastOperand('');
  };

  const checkKeyboard = (e) => {
    if (e.key === 'Enter') {
      calculate();
    } else if (e.key === 'Escape') {
      clearDisplay();
    } else if (e.key === '+') {
      handleOperator('+');
    } else if (e.key === '-') {
      handleOperator('-');
    } else if (e.key >= '0' && e.key <= '9') {
      inputNumber(e.key);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', checkKeyboard);
    return () => {
      document.removeEventListener('keydown', checkKeyboard);
    };
  }, [currentValue, previousValue, operator, lastOperand]);

  return (
    <div className="calculator">
      <input
        id="display"
        value={currentValue}
        readOnly
        style={{ width: '400px', textAlign: 'right' }}
      />
      <div>
        <button className="button1">MC</button>
        <button className="button1" onClick={() => handleOperator('-')}>-</button>
        <button className="button1" onClick={() => handleOperator('+')}>+</button>
        <button className="button1" onClick={clearDisplay}>C</button>
      </div>
      <div>
        <button className="button1" onClick={() => inputNumber('1')}>1</button>
        <button className="button1" onClick={() => inputNumber('2')}>2</button>
        <button className="button1" onClick={() => inputNumber('3')}>3</button>
        <button className="button1">*</button>
      </div>
      <div>
        <button className="button1" onClick={() => inputNumber('4')}>4</button>
        <button className="button1" onClick={() => inputNumber('5')}>5</button>
        <button className="button1" onClick={() => inputNumber('6')}>6</button>
        <button className="button1" onClick={calculate}>/</button>
      </div>
      <div>
      <button className="button1" onClick={() => inputNumber('7')}>7</button>
        <button className="button1" onClick={() => inputNumber('8')}>8</button>
        <button className="button1" onClick={() => inputNumber('9')}>9</button>
        <button className="button1" onClick={calculate}>=</button>
      </div>
      <div>
        <button className="button1" onClick={() => inputNumber('.')}>0</button>
        <button className="button1">&lt;</button>
        <button className="button1">&gt;</button>
        <button className="button1" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
