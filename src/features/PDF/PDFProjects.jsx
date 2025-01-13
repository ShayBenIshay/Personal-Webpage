import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { projectsData } from "../../data/projectsData";
import { commonStyles } from "./shared/PDFStyles";
import headerData from "../../data/headerData";

const styles = StyleSheet.create({
  ...commonStyles,
  link: {
    ...commonStyles.link,
    textDecoration: "underline",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

const PDFProjects = () => {
  return (
    <View>
      <Text style={styles.heading}>Projects</Text>
      {projectsData.map((project, index) => (
        <View key={index}>
          <Text style={styles.title}>{project.title}.</Text>
          <Text style={styles.subtitle}>{project.subtitle}</Text>
          {project.features && (
            <Text style={styles.description}>{project.features}</Text>
          )}
          {project.backend && (
            <Text style={styles.description}>{project.backend}</Text>
          )}
          {project.frontend && (
            <Text style={styles.description}>{project.frontend}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default PDFProjects;
