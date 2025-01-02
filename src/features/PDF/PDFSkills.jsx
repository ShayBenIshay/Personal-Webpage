import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { skillsData } from "../../data/skillsData";

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    marginTop: 4,
    marginBottom: 5,
    color: "hsla(210, 100%, 45%, 0.9)",
  },
  description: {
    fontSize: 12,
  },
  bullet: {
    fontSize: 12,
    marginLeft: 20,
    marginRight: 5,
  },
});

const PDFSkills = () => {
  return (
    <View>
      <Text style={styles.heading}>Skills</Text>
      {Object.keys(skillsData).map((category) => (
        <View key={category} style={{ flexDirection: "row" }}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.description}>
            {category}: {skillsData[category].join(", ")}.
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PDFSkills;
