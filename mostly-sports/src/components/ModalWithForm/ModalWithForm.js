import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, name, onClose, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button className="close__button-x" type="button" onClick={onClose} />
        <h3 className="modal__title"> {title} </h3>
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </div>
  );
};

export default ModalWithForm;
