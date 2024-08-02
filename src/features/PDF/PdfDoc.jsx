import React from "react";
import PDFHeader from "./PDFHeader";
import PDFProjects from "./PDFProjects";
import PDFExperience from "./PDFExperience";
import PDFEducation from "./PDFEducation";
import PDFSkills from "./PDFSkills";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page1: {
    padding: 15,
  },
});

const PdfDoc = () => {
  return (
    <Document title="CV">
      <Page size="A4" style={styles.page1}>
        <PDFHeader />
        <PDFProjects />
        <PDFExperience />
        <PDFEducation />
        <PDFSkills />
      </Page>
    </Document>
  );
};

export default PdfDoc;
