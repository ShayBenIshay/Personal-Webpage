import React from "react";
import PDFHeader from "./PDFHeader";
import PDFProjects from "./PDFProjects";
import PDFExperience from "./PDFExperience";
import PDFEducation from "./PDFEducation";
import PDFSkills from "./PDFSkills";
import PDFFooter from "./PDFFooter";
import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 15,
    paddingBottom: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
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
      <Page size="A4" style={styles.page} wrap={false}>
        <View style={styles.content}>
          <PDFHeader />
          <PDFEducation />
          <PDFExperience />
          <PDFProjects />
          <PDFSkills />
        </View>
        <PDFFooter />
      </Page>
    </Document>
  );
};

export default PdfDoc;
