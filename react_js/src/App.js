import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sign from "./components/Sign_in.jsx";
import Nav from "./components/nav.jsx";
import Login from "./components/login.jsx";

const App = () => {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
}

export default App;
