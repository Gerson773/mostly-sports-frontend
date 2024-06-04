import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { Link, withRouter } from "react-router-dom";

const SigninModal = ({ onClose, isOpen, onLogin, onSignUp }) => {
  return (
    <ModalWithForm
      className="signin__modal"
      title="Sign In"
      onClose={onClose}
      isOpen={isOpen}
      //   onSubmit={}
    >
      <label className="modal__label" htmlFor="email">
        <p className="modal__header">Email</p>
        <input
          id="email"
          className="modal__input modal__input_type_login-email"
          type="email"
          placeholder="Enter Email"
          //   value={email}
          //   onChange={handleEmailChange}
          required
        />
      </label>
      <label className="modal__label" htmlFor="password">
        <p className="modal__header">Password</p>
        <input
          id="password"
          className="modal__input modal__input_type_login-password"
          type="password"
          placeholder="Enter Password"
          //   value={password}
          //   onChange={handlePasswordChange}
          required
        />
      </label>
      <div className="button-container">
        <button type="submit" className="signin__btn">
          Sign In
        </button>
        <div>
          <button
            type="button"
            className="signup__login-link"
            onClick={onSignUp}
          >
            <span>or</span>
            <span className="signup__text">Sign Up</span>
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
