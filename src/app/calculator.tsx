import { useState, ChangeEvent, CSSProperties } from 'react';

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [total, setTotal] = useState<number | null>(null);

  const handleCalculate = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setTotal(sum);
  };

  const handleChangeNum1 = (e: ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
  };

  const handleChangeNum2 = (e: ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h1>Simple Calculator</h1>
      <div style={styles.inputContainer}>
        <input
          type="number"
          value={num1}
          onChange={handleChangeNum1}
          placeholder="First Number"
          style={styles.input}
        />
        <input
          type="number"
          value={num2}
          onChange={handleChangeNum2}
          placeholder="Second Number"
          style={styles.input}
        />
      </div>
      <button onClick={handleCalculate} style={styles.button}>Calculate</button>
      {total !== null && <h2>Total: {total}</h2>}
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Calculator;
