import "./App.css";
import ResponsiveAppBar from "./components/appbar/ResponsiveAppBar.jsx";
import Home from "./pages/Home.jsx";
import Chapters from "./pages/Chapters.jsx";
import mangaList from "/src/data/mangaList.json";
import NotFound from "./pages/404";
function App() {
  let component;
  if (window.location.pathname == "/") {
    component = <Home />;
  } else if (window.location.pathname.includes("/manga")) {
    component = <Chapters name={window.location.pathname} />;
  } else {
    component = <NotFound />;
  }

  return (
    <div className="App">
      <ResponsiveAppBar className="appbar" />
      {component}
    </div>
  );
}

export default App;
