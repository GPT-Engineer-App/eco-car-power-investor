import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Description from "./pages/Description.jsx";
import Investor from "./pages/Investor.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/description" element={<Description />} />
        <Route path="/investor" element={<Investor />} />
      </Routes>
    </Router>
  );
}

export default App;
