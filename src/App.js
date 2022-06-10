import "./App.css";
import RoutesComponents from "./RoutesComponents";
import Search from "./Search";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <main>
      <div className="App">
        <Router>
          <RoutesComponents />
        </Router>
      </div>
    </main>
  );
}

export default App;
