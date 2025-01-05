import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { skillsData } from "../../data/skillsData";
import { commonStyles } from "./shared/PDFStyles";

const styles = StyleSheet.create({
  ...commonStyles,
  bullet: {
    fontSize: 12,
    marginLeft: 10,
    marginRight: -5,
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
