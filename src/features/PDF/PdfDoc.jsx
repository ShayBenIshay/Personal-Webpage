import React from "react";
import PDFHeader from "./PDFHeader";
import PDFProjects from "./PDFProjects";
import PDFExperience from "./PDFExperience";
import PDFEducation from "./PDFEducation";
import PDFSkills from "./PDFSkills";
import PDFFooter from "./PDFFooter";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page1: {
    padding: 15,
    flexDirection: "column",
  },
  contentContainer: {
    flexDirection: "row",
    flex: 1,
  },
});

const PdfDoc = () => {
  return (
    <Document
      title="Shay Ben Ishay - CV"
      author="Shay Ben Ishay"
      creator="Shay Ben Ishay"
      producer="React PDF"
      language="en"
    >
      <Page size="A4" style={styles.page1} wrap={false}>
        <PDFHeader />
        <PDFEducation />
        <PDFExperience />
        <PDFProjects />
        <PDFSkills />
        <PDFFooter />
      </Page>
    </Document>
  );
};

export default PdfDoc;
