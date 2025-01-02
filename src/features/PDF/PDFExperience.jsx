import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { experienceData } from "../../data/experienceData";

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    marginTop: 7,
    marginBottom: 5,
    color: "hsla(210, 100%, 45%, 0.9)",
  },
  jobTitle: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10,
    textDecoration: "underline",
  },
  jobDates: {
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 20,
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
    marginLeft: 10,
    color: "#888888",
  },
});

const PDFExperience = () => {
  return (
    <View>
      <Text style={styles.heading}>Experience</Text>
      <View>
        <Text style={styles.jobTitle}>
          {experienceData.jobs[0].company} - {experienceData.jobs[0].title}
        </Text>
        <Text style={styles.jobDates}>
          {experienceData.jobs[0].type}: {experienceData.jobs[0].date}
        </Text>
        <Text style={styles.description}>
          {experienceData.jobs[0].descriptionOne}
        </Text>
        <Text style={styles.description}>
          {experienceData.jobs[0].descriptionTwo}
        </Text>
        {/* <Text style={styles.description}>
          daily routine: {experienceData.jobs[0].routinePdf}
        </Text> */}
        <Text style={styles.notes}>{experienceData.jobs[0].notes}</Text>
      </View>
      <View>
        <Text style={styles.jobTitle}>
          {experienceData.jobs[1].company} - {experienceData.jobs[1].title}
        </Text>
        <Text style={styles.jobDates}>
          {experienceData.jobs[1].type}: {experienceData.jobs[1].date}
        </Text>
        <Text style={styles.description}>
          {experienceData.jobs[1].descriptionOne}
        </Text>
        <Text style={styles.description}>
          {experienceData.jobs[1].descriptionTwo}
        </Text>
        {/* <Text style={styles.description}>
          daily routine: {experienceData.jobs[1].routinePdf}
        </Text> */}
        <Text style={styles.notes}>{experienceData.jobs[1].notes}</Text>
      </View>
    </View>
  );
};

export default PDFExperience;
