import React from "react";
import "./styles/TogglePDFMode.css";

const TogglePDFMode = ({ pdfMode, setPdfMode }) => {
  return (
    <div className="toggle-container">
      <div>Toggle pdf/site view:</div>
      <label className="switch">
        <input
          type="checkbox"
          checked={pdfMode}
          onChange={() => setPdfMode(!pdfMode)}
        />
        <span className="slider round"></span>
      </label>
      <span className="toggle-label">
        {pdfMode ? "PDF Mode On" : "PDF Mode Off"}
      </span>
    </div>
  );
};

export default TogglePDFMode;
