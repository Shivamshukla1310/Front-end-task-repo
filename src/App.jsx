import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Reset from './Reset/Reset.jsx';
import OtpVerification from './Reset/OtpVerification.jsx';
import SetNewPassword from './Reset/SetNewPassword.jsx';
import Header from './Common/Header.jsx';
import Signup from './SignUp/SignUp.jsx';

export const App = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/reset" element={<Reset email={email} setEmail={setEmail} />} />
        <Route path="/otp" element={<OtpVerification email={email} onBackToReset={() => window.history.back()} />} />
        <Route path="/set-password" element={<SetNewPassword />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
};
