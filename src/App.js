import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

import MasterclassList from "./components/MasterClassList";
import MasterclassDetail from "./components/MasterClassDetails";

function App() {
  return (
    <Router>
      <div className="App">
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
