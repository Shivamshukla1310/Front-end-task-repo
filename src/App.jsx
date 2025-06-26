import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<div className="container" style={{padding: '40px 0', textAlign: 'center'}}><h1>Welcome to Home Services</h1><p>Your trusted partner for all home maintenance and repair needs</p></div>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;