import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import MasterclassList from "./components/MasterClassList";
import MasterclassDetail from "./components/MasterClassDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/masterclasses" element={<MasterclassList />} />
            <Route path="/masterclasses/:id" element={<MasterclassDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
