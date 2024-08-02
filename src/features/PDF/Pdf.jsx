import { PDFViewer } from "@react-pdf/renderer";
import PdfDoc from "./PdfDoc";

const Pdf = () => {
  return (
    <div className="pdf">
      <PDFViewer height={1200} width={1200}>
        <PdfDoc />
      </PDFViewer>
    </div>
  );
};

export default Pdf;
