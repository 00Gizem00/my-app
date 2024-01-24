import React, { useState } from 'react';
import Display from './Display';
import Button from './components/Button';

const operators = ['+', '-', '*', '/'];

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  const handleNumberClick = (value) => {
    setExpression(expression + value);
  };

  const handleOperatorClick = (operator) => {
    if (!expression || operators.includes(expression.slice(-1))) return;
    setExpression(expression + operator);
  };

  const handleEqualsClick = () => {
    try {
      const outcome = eval(expression);
      setResult(outcome);
    } catch (error) {
      setResult('Error');
    } finally {
      setExpression('');
    }
  };

  const handleClearClick = () => {
    setExpression('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <div className="button-grid">
        <Button value="7" onClick={() => handleNumberClick('7')} />
        <Button value="8" onClick={() => handleNumberClick('8')} />
        <Button value="9" onClick={() => handleNumberClick('9')} />
        <Button value="/" onClick={() => handleOperatorClick('/')} />
        <Button value="4" onClick={() => handleNumberClick('4')} />
        <Button value="5" onClick={() => handleNumberClick('5')} />
        <Button value="6" onClick={() => handleNumberClick('6')} />
        <Button value="*" onClick={() => handleOperatorClick('*')} />
        <Button value="1" onClick={() => handleNumberClick('1')} />
        <Button value="2" onClick={() => handleNumberClick('2')} />
        <Button value="3" onClick={() => handleNumberClick('3')} />
        <Button value="-" onClick={() => handleOperatorClick('-')} />
        <Button value="0" onClick={() => handleNumberClick('0')} />
        <Button value="." onClick={() => handleNumberClick('.')} />
        <Button value="C" onClick={handleClearClick} />
        <Button value="=" onClick={handleEqualsClick} />
      </div>
    </div>
  );
};

export default Calculator;
