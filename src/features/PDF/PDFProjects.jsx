import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { projectsData } from "../../data/projectsData";

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginTop: 15,
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
    color: "#888888",
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 20,
  },
  notes: {
    fontSize: 10,
    marginBottom: 10,
  },
});

const PDFProjects = () => {
  return (
    <View>
      <Text style={styles.heading}>{projectsData.title}</Text>
      {projectsData.map((project) => (
        <View key={project.title}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectSubtitle}>
            {project.subtitle} Check it out here:{" "}
            <Link href={projectsData[1].webpageUrl}>
              {projectsData[1].webpageTitle}
            </Link>
          </Text>
          <Text style={styles.description}>{project.description}</Text>
          <Text style={styles.notes}>
            <Link href={project.githubUrl}>{project.githubTitle}</Link>
            {project.notes}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PDFProjects;
