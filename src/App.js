import { useState } from "react";
import '../src/components/App.css'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1 className="contador">{count}</h1>
      <button className="btn-aumentar" onClick={() => {
        setCount(count + 1);
        const corCount = parseInt(document.querySelector('.contador').innerHTML);
        if (corCount == -1) {
          document.querySelector('.contador').style.color = 'black';
        } else {
          document.querySelector('.contador').style.color = 'green';
        }
        document.title = 'Aumentando';
      }}>Aumentar</button>
      <button className="btn-diminuir" onClick={() =>
      {
        setCount(count - 1);
        const corCount = parseInt(document.querySelector('.contador').innerHTML);
        if (corCount == 1) {
          document.querySelector('.contador').style.color = 'black';
        } else {
          document.querySelector('.contador').style.color = 'red';
        }
        document.title = 'Diminuindo';
      }}>Diminuir</button>
    </div>
  )
}
export default App;