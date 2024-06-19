import { useState } from "react";
import Layout from "./components/Layout";
import PDFLayout from "./components/PDFLayout";
import TogglePDFMode from "./components/TogglePDFMode";

function App() {
  const [pdfMode, setPdfMode] = useState(false);

  return (
    <>
      <TogglePDFMode pdfMode={pdfMode} setPdfMode={setPdfMode} />
      {pdfMode ? <PDFLayout /> : <Layout />}
    </>
  );
}

export default App;
