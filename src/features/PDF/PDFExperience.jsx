import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
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
  websitesContainer: {
    marginTop: 3,
    marginLeft: 10,
    marginBottom: 5,
  },
  websiteItem: {
    textDecoration: "none",
    padding: 2,
  },
  websiteTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 2,
  },
  websiteDescription: {
    fontSize: 10,
    marginTop: 2,
    marginBottom: 2,
    color: "#000",
  },
  websiteTech: {
    fontSize: 10,
    color: "#000",
    marginTop: 2,
    fontStyle: "italic",
  },
  websiteLink: {
    color: "#000",
    textDecoration: "none",
  },
  websiteUrl: {
    color: "#2563eb",
    fontSize: 10,
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
          {job.notes && <Text style={styles.notes}>{`(${job.notes})`}</Text>}

          {job.websites && job.websites.length > 0 && (
            <View style={styles.websitesContainer}>
              {job.websites.map((website, wIndex) => (
                <Link key={wIndex} style={styles.websiteItem} src={website.url}>
                  <Text style={styles.websiteTitle}>
                    {website.title} -{" "}
                    <Text style={styles.websiteUrl}>{website.url}</Text>.{" "}
                    {website.description} Technologies: {website.tech}
                  </Text>
                </Link>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default PDFExperience;
