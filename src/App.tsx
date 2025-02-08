import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
