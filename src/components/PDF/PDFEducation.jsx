import { Link, StyleSheet, Text } from "@react-pdf/renderer";
import { educationData } from "../../data/educationData";

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    color: "hsla(210, 100%, 45%, 0.9)",
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },
  subtitle: {
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

const PDFEducation = () => {
  return (
    <div>
      <Text style={styles.heading}>{educationData.title}</Text>
      <Text style={styles.title}>{educationData.degree}</Text>
      <Text style={styles.subtitle}>
        {educationData.school}. graduated - {educationData.graduated}.
      </Text>
      <Text style={styles.description}>{educationData.description}</Text>
      <Text style={styles.notes}>
        <Link href={educationData.finalProjectUrl}>
          {educationData.finalProjectName}
        </Link>
        {": "}
        {educationData.notes}
      </Text>
    </div>
  );
};

export default PDFEducation;
