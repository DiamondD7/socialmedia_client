import React from "react";
import Footer from "./components/Footer/Footer";
import HomeLogIn from "./components/Register/HomeLogIn";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/Register/SignUpForm/SignUpForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLogIn />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
