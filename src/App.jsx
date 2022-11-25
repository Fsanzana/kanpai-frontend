import { useState } from "react";
import boxi from "./assets/boxi.png";
import "./App.css";

import Impress, { Step, Slide } from "impress.js-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Impress>
        <Slide x={50} y={300} z={35}>
          Hello World
        </Slide>
        <Step x={50} y={30} z={35}>
          Test
        </Step>
        <img x={40} rotateX={45} src="./pic.png" />
      </Impress>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="./src/test/page1.html" target="_blank">
          <img src={boxi} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Bocchi</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
