import React from "react";
import Header from "../Header/Header";
import { useState, useEffect, useContext, createContext } from "react";
import "normalize.css";

import "./App.css";
import SportsSearchSection from "../SportsSearchSection/SportsSearchSection";
import Footer from "../Footer/Footer";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleLoginModal = () => {
    console.log("Opening login modal");
    setActiveModal("login");
  };

  const handleSignupModal = () => {
    console.log("Opening signup modal");
    setActiveModal("signup");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (activeModal && !e.target.closest(".modal__content")) {
        handleCloseModal();
      }
    };

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (activeModal) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal, handleCloseModal]);

  return (
    <div className="app-container">
      <Header onLogin={handleLoginModal} />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          path="/login"
          element={<SigninModal onClose={handleCloseModal} />}
        />

        <Route
          path="/signup"
          element={
            <SignupModal
              onSignUp={handleSignupModal}
              onClose={handleCloseModal}
              isOpen={activeModal === "signup"}
            />
          }
        />
      </Routes>
      <Footer />
      {activeModal === "login" && (
        <SigninModal
          onSignUp={handleSignupModal}
          onClose={handleCloseModal}
          // handleUserLogin={handleLogIn}
          isOpen={activeModal === "login"}
        />
      )}
      {activeModal === "signup" && (
        <SignupModal
          onClose={handleCloseModal}
          // handleUserLogin={handleLogIn}
          isOpen={activeModal === "signup"}
          onLogin={handleLoginModal}
        />
      )}
    </div>
  );
}

export default App;
