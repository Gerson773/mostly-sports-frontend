import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import "normalize.css";

import "./App.css";
import Footer from "../Footer/Footer";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import Main from "../Main/Main";
import CirclePreloader from "../CirclePreloader/CirclePreloader";
import { getSearchResults, getScheduledEvents } from "../../utils/Api";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [isTickerLoading, setIsTickerLoading] = useState(true);

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

  const handleSearch = (eventId) => {
    getSearchResults(eventId)
      .then((results) => {
        setSearchResults(results);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGetScheduledEvents = () => {
    getScheduledEvents()
      .then((data) => {
        if (data && data.events && data.events.length > 0) {
          setGames(data.events);
        } else {
          console.error("No events found");
        }
      })
      .catch((error) => console.error("Error fetching events:", error))
      .finally(() => setIsTickerLoading(false));
  };

  useEffect(() => {
    handleGetScheduledEvents();
  }, []);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <CirclePreloader />
      ) : (
        <>
          <Header onLogin={handleLoginModal} />
          <main className="main__container">
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    setSearchResults={setSearchResults}
                    setError={setError}
                    searchResults={searchResults}
                    error={error}
                    handleSearch={handleSearch}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                  />
                }
              />

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
          </main>
          <Footer games={games} isTickerLoading={isTickerLoading} />
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
        </>
      )}
    </div>
  );
}

export default App;
