import { useState, useLayoutEffect } from "react";
import boxi from "./assets/boxi.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = "impress().init();";
    script.src = "/impress.js";
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <div className="App">
      {/* MEMEMEMEME */}
      <div
        id="impress-toolbar"
        style={{ position: "absolute", zIndex: 1 }}
      ></div>

      <div id="impress" data-transition-duration="250">
        <div id="overview" class="step active" data-x="0" data-y="0" data-z="0">
          <img src="/1.jpg" />
        </div>
        <div
          id="step-1"
          class="step future"
          data-x="0"
          data-y="-250"
          data-z="1"
          data-scale="0.5"
        >
          <div
            id="step-1-child"
            style={{
              width: "1500px",
              height: "1000px",
              border: "3000px solid #303030",
              opacity: 0.99,
            }}
          ></div>
        </div>

        <div
          id="step-2"
          class="step future"
          data-x="168"
          data-y="112"
          data-z="2"
          data-scale="0.25"
        >
          <div
            id="step-2-child"
            style={{
              width: "1200px",
              height: "850px",
              border: "3000px solid #303030",
              opacity: 0.99,
            }}
          ></div>
        </div>
      </div>
      {/* MEMEMEMEME */}

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a
          href="http://localhost:5173/src/test/manga/hitoribocchi-no-oo-seikatsu/chapter1_readerTest/reader.html"
          target="_blank"
        >
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
