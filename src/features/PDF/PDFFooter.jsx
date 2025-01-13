import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import { projectsData } from "../../data/projectsData";
import headerData from "../../data/headerData";
import { commonStyles } from "./shared/PDFStyles";

const styles = StyleSheet.create({
  footer: {
    ...commonStyles.section,
    borderTop: "2px solid black",
    paddingTop: 10,
    marginBottom: "auto",
    width: "100%",
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  description: {
    ...commonStyles.description,
    marginLeft: 0,
    marginBottom: 0,
  },
  link: {
    ...commonStyles.link,
    textDecoration: "underline",
  },
});

const PDFFooter = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.flexContainer}>
        <Text style={styles.description}>Review my projects here: </Text>
        {projectsData.map((project, index) => (
          <Link style={styles.link} key={index} href={project.webpageUrl}>
            {project.webpageTitle}
          </Link>
        ))}
      </View>
      <View style={styles.flexContainer}>
        <Text style={styles.description}>Or in my GitHub: </Text>
        <Link style={styles.link} href={headerData.gitHub.href}>
          {headerData.gitHub.href}
        </Link>
      </View>
    </View>
  );
};

export default PDFFooter;
