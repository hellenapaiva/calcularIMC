import { useState } from "react";
import "./app.css";

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const convertAltura = altura / 100
    const imc = peso / (convertAltura * convertAltura);

    if (imc < 18.6) {
      setMensagem('Você está abaixo do peso! Seu IMC: ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('Peso ideal! Seu IMC: ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 29.9) {
      setMensagem('Você está levemente acima do seu peso! Seu IMC: ' + imc.toFixed(2));
    } else if (imc > 34.9) {
      setMensagem('Cuidado, obesidade! Seu IMC: ' + imc.toFixed(2));
    }


  }

  return (
    <div className="container">
      <h1>Calculadora IMC</h1>
      <span>O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade.</span>
      <div className="area-input">
        <input
          type="text"
          placeholder="Digite seu peso em (kg) Ex: 90"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
        <input
          type="text"
          value={altura}
          placeholder="Digite sua altura em (cm) Ex: 180"
          onChange={(event) => setAltura(event.target.value)}
        />
        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2 className="msg">{mensagem}</h2>
    </div>
  );
}

export default App;
