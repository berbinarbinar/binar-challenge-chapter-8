import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        {/* <Route path="/form" element={<Form />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
