import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Forgotpassword from "./components/auth/Forgotpassword";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
      </Routes>
    </Router>
  );
};

export default App;
