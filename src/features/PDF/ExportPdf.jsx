import React from "react";
import PdfDoc from "./PdfDoc";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ExportPdf = () => {
  return (
    <div>
      <PDFDownloadLink document={<PdfDoc />} fileName="ShayCV.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Export to Pdf!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default ExportPdf;
