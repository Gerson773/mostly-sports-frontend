import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SingupModal = ({ onClose, isOpen, onSignUp, onLogin }) => {
  return (
    <ModalWithForm
      className="signup__modal"
      title="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      //   onSubmit={}
    >
      <label className="modal__label" htmlFor="email">
        <p className="modal__header">Email</p>
        <input
          id="email"
          className="modal__input modal__input_type_signup-email"
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
          className="modal__input modal__input_type_signup-password"
          type="password"
          placeholder="Enter Password"
          //   value={password}
          //   onChange={handlePasswordChange}
          required
        />
      </label>

      <label className="modal__label" htmlFor="name">
        <p className="modal__header">Username</p>
        <input
          id="name"
          className="modal__input modal__input_type_username"
          type="text"
          name="username"
          placeholder="Enter your username"
          minLength="1"
          maxLength="30"
          //   value={name}
          //   onChange={handleNameChange}
        />
      </label>

      <div className="button-container">
        <button type="submit" className="signup__btn">
          Sign Up
        </button>
        <div>
          <button
            type="button"
            className="signin__login-link"
            onClick={onLogin}
          >
            <span>or</span>
            <span className="signin__text">Sign in</span>
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default SingupModal;
