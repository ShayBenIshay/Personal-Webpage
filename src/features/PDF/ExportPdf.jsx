import React from "react";
import PdfDoc from "./PdfDoc";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ExportPdf = () => {
  return (
    <PDFDownloadLink
      className="navbar__a"
      document={<PdfDoc />}
      fileName="ShayCV.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Export to Pdf"
      }
    </PDFDownloadLink>
  );
};

export default ExportPdf;
