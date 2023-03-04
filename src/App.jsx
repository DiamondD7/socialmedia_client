import React from "react";
import Footer from "./components/Footer/Footer";
import HomeLogIn from "./components/Register/HomeLogIn";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/Register/SignUpForm/SignUpForm";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import ConnectionContainer from "./components/Connection/ConnectionContainer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLogIn />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/hub" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<ConnectionContainer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
