import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { skillsData } from "../../data/skillsData";

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    color: "hsla(210, 100%, 45%, 0.9)",
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
  },
  bullet: {
    fontSize: 12,
    marginLeft: 20,
    marginRight: 5,
  },
});

const formatCategoryName = (category) => {
  return category.replace(/([A-Z])/g, " $1").trim();
};

const PDFSkills = () => {
  return (
    <View>
      <Text style={styles.heading}>{skillsData.title}</Text>
      {Object.keys(skillsData.skills).map((category) => (
        <View key={category} style={{ flexDirection: "row" }}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.description}>
            {formatCategoryName(category)}:{" "}
            {skillsData.skills[category].join(", ")}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PDFSkills;
