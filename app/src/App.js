import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddPlayer from "./Pages/AddPlayer";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/player/add" element={<AddPlayer />}></Route>
        <Route path="/player/add/:id" element={<Dashboard />}></Route>
        {/* <Route path="/form" element={<Form />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
