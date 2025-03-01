
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState("+");

  const calculateResult = () => {
    switch (operation) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return b !== 0 ? a / b : "Error";
      default: return 0;
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Calculadora React</h2>
      <div className="mb-3">
        <input type="number" className="form-control" value={a} onChange={e => setA(Number(e.target.value))} />
      </div>
      <div className="mb-3">
        <input type="number" className="form-control" value={b} onChange={e => setB(Number(e.target.value))} />
      </div>
      <div className="btn-group mb-3">
        {["+", "-", "×", "÷"].map(op => (
          <button 
            key={op} 
            className={`btn ${operation === op ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setOperation(op)}
          >
            {op}
          </button>
        ))}
      </div>
      <h3>Resultado: {calculateResult()}</h3>
    </div>
  );
}
