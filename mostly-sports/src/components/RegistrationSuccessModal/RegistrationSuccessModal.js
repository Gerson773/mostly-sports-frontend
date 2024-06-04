import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegistrationSuccessModal = ({ onClose, isOpen, onLogin }) => {
  return (
    <ModalWithForm
      className="registration__success-modal"
      title="Registration succesfully completed"
      onClose={onClose}
      isOpen={isOpen}
    >
      <button className="signin__success-modal" onClick={onLogin}>
        Sign In
      </button>
    </ModalWithForm>
  );
};

export default RegistrationSuccessModal;
