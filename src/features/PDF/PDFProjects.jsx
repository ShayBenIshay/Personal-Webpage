import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { projectsData } from "../../data/projectsData";

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginTop: 25,
    marginBottom: 5,
    color: "hsla(210, 100%, 45%, 0.9)",
  },
  projectTitle: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
    textDecoration: "underline",
  },
  projectSubtitle: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 20,
    // color: "#888888",
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 20,
  },
  notes: {
    fontSize: 10,
    marginBottom: 10,
    color: "#888888",
  },
});

const PDFProjects = () => {
  return (
    <View>
      <Text style={styles.heading}>Projects</Text>
      <View key={projectsData[0].title}>
        <Text style={styles.projectTitle}>{projectsData[0].title}</Text>
        <Text style={styles.projectSubtitle}>
          {projectsData[0].subtitle}. Check it out here:{" "}
          <Link href={projectsData[0].webpageUrl}>
            {projectsData[0].webpageTitle}
          </Link>
        </Text>
        <Text style={styles.description}>{projectsData[0].description}</Text>
        <Text style={styles.notes}>{projectsData[0].notes}</Text>
        <View key={projectsData[1].title}>
          <Text style={styles.projectTitle}>{projectsData[1].title}</Text>
          <Text style={styles.projectSubtitle}>
            {projectsData[1].subtitle} Check it out here:{" "}
            <Link href={projectsData[1].webpageUrl}>
              {projectsData[1].webpageTitle}
            </Link>
          </Text>
          <Text style={styles.description}>{projectsData[1].description}</Text>
          <Text style={styles.notes}>{projectsData[1].notes}</Text>
        </View>
      </View>
    </View>
  );
};

export default PDFProjects;
