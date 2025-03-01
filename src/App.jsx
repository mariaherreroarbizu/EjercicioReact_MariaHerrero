// Importo los estilos de Bootstrap y App.css
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

// Traigo el hook 'useState' desde React para gestionar el estado dentro del componente
import { useState } from "react";

// Defino el componente de la calculadora
export default function Calculator() {

  // Uso 'useState' para crear tres estados: 'a' (primer número), 'b' (segundo número) y 'operation' (operación elegida)
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState("+");

  // Defino la función para calcular el resultado según la operación seleccionada
  const calculateResult = () => {
    // Utilizo el comando 'switch' para elegir la operación y devolver el resultado
    switch (operation) {
      case "+": return a + b;  // Suma
      case "-": return a - b;  // Resta
      case "×": return a * b;  // Multiplicación
      case "÷": return b !== 0 ? a / b : "Error"; // División.Error si hay un 0 en los números de entrada
      default: return 0;  // Devuelvo 0 si no se sabe la operación
    }
  };

  return (
    // Creo el contenedor principal con estilos de Bootstrap
    <div className="container mt-4">
      {/* Título de la calculadora */}
      <h2 className="mb-3">Calculadora React</h2>

      {/* Creo un input para el primer número (a), actualizando su valor en el estado */}
      <div className="mb-3">
        <input 
          type="number" 
          className="form-control" 
          value={a} 
          onChange={e => setA(Number(e.target.value))} // Actualizo el valor de 'a' cuando cambio el input
        />
      </div>

      {/* Creo un input para el segundo número (b), actualizando su valor en el estado */}
      <div className="mb-3">
        <input 
          type="number" 
          className="form-control" 
          value={b} 
          onChange={e => setB(Number(e.target.value))} // Actualizo el valor de 'b' cuando cambio el input
        />
      </div>

      {/* Creo un grupo de botones para las operaciones */}
      <div className="btn-group mb-3">
        {["+", "-", "×", "÷"].map(op => (  // Mapeo las operaciones disponibles y creo un botón para cada una
          <button 
            key={op} 
            // Cambio el estilo del botón dependiendo de si la operación está seleccionada
            className={`btn ${operation === op ? "btn-primary" : "btn-outline-primary"}`}
            // Cambio la operación seleccionada cal hacer clic en un botón
            onClick={() => setOperation(op)}
          >
            {op}
          </button>
        ))}
      </div>

      {/* Resultado de la operación */}
      <h3>Resultado: {calculateResult()}</h3>
    </div>
  );
}


