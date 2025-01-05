import React, { useState } from "react";
import PdfDoc from "./PdfDoc";
import Pdf from "./Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ExportPdf = () => {
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const handleClose = () => {
    console.log("close");
    setShowPdfViewer(false);
  };

  return (
    <div>
      <button
        className="navbar__a"
        onClick={() => setShowPdfViewer(true)}
        style={{ marginRight: "1rem" }}
      >
        Preview PDF
      </button>

      <PDFDownloadLink
        className="navbar__a"
        document={<PdfDoc />}
        fileName="ShayCV.pdf"
      >
        {({ loading, error }) => (
          <>
            {error && <span className="error">Error generating PDF</span>}
            {loading ? (
              <span className="loading">Generating PDF...</span>
            ) : (
              "Export to PDF"
            )}
          </>
        )}
      </PDFDownloadLink>

      {showPdfViewer && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#f0f0f0",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            <button
              onClick={() => {
                console.log("Button clicked");
                handleClose();
              }}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                zIndex: 1001,
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              ✕
            </button>
            <Pdf />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExportPdf;
