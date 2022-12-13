import "./App.css";
import ResponsiveAppBar from "./components/appbar/ResponsiveAppBar.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Chapters from "./pages/Chapters.jsx";
import Editor from "./pages/Editor.jsx";
import Footer from "./components/footer/Footer.jsx";
import NotFound from "./pages/404";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

function App() {
  let component;
  if (window.location.pathname == "/") {
    component = <Home />;
  } else if (window.location.pathname.includes("/manga")) {
    component = (
      <Chapters name={window.location.pathname.replace("/manga/", "")} />
    );
  } else if (window.location.pathname.includes("/search")) {
    component = <Search />;
  } else if (window.location.pathname.includes("/publisher-editor")) {
    component = <Editor />;
  } else if (window.location.pathname.includes("/publisher-signup")) {
  } else {
    component = <NotFound />;
  }

  if (window.location.pathname.includes("/publisher")) {
    return <div className="App">{component}</div>;
  } else
    return (
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <ResponsiveAppBar className="appbar" />
          {component}
          <Footer className="footer" />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
}

export default App;
