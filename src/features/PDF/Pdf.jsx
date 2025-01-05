import { PDFViewer } from "@react-pdf/renderer";
import PdfDoc from "./PdfDoc";

const Pdf = () => {
  return (
    <div className="pdf">
      <PDFViewer
        style={{
          width: "60vw", // 80% of the viewport width
          height: "90vh", // 80% of the viewport height
          backgroundColor: "#f0f0f0",
          border: "none",
          borderRadius: "4px",
        }}
      >
        <PdfDoc />
      </PDFViewer>
    </div>
  );
};

export default Pdf;
