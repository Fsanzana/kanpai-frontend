import "./App.css";
import ResponsiveAppBar from "./components/appbar/ResponsiveAppBar.jsx"
import Home from "./pages/Home.jsx"
import Chapters from "./pages/Chapters";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar className="appbar" />
      <Home />
    </div>
  );
}

export default App;
