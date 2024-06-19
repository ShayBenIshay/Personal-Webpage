import { Document, PDFViewer, Page, StyleSheet } from "@react-pdf/renderer";
import PDFHeader from "./PDF/PDFHeader";
import PDFProjects from "./PDF/PDFProjects";
import PDFExperience from "./PDF/PDFExperience";
import PDFEducation from "./PDF/PDFEducation";
import PDFSkills from "./PDF/PDFSkills";
import "./styles/PDFLayout.css";

const styles = StyleSheet.create({
  page1: {
    padding: 15,
  },
});

const PDFLayout = () => {
  return (
    <div className="pdf">
      <PDFViewer height={1200} width={1200}>
        <Document title="CV">
          <Page size="A4" style={styles.page1}>
            <PDFHeader />
            <PDFProjects />
            <PDFExperience />
            <PDFEducation />
            <PDFSkills />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default PDFLayout;
