import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { experienceData } from "../../data/experienceData";
import { commonStyles } from "./shared/PDFStyles";

const styles = StyleSheet.create({
  ...commonStyles,
  jobTitle: {
    ...commonStyles.title,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    textDecoration: "underline",
  },
  jobDetails: {
    fontSize: 12,
    color: "#000",
    marginLeft: 10,
  },
});

const PDFExperience = () => {
  return (
    <View>
      <Text style={styles.heading}>Experience</Text>
      {experienceData.jobs.map((job, index) => (
        <View key={index}>
          <Text style={styles.title}>
            {job.company} - {job.title}. {job.type}: {job.date}
          </Text>
          <Text style={styles.description}>{job.descriptionOne}</Text>
          <Text style={styles.description}>{job.descriptionTwo}</Text>
          <Text style={styles.notes}>{`(${job.notes})`}</Text>
        </View>
      ))}
    </View>
  );
};

export default PDFExperience;
