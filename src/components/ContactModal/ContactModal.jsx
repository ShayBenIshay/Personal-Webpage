import React from "react";
import "./contactModal.css";
import ContactForm from "../ContactForm/ContactForm";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Contact Me</h2>
        <ContactForm onClose={onClose} />
      </div>
    </div>
  );
};

export default ContactModal;
