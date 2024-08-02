import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { aboutmeData } from "../../data/aboutmeData";

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginBottom: 5,
    color: "rgba(0, 20, 50, 0.9)",
  },
  description: {
    fontSize: 12,
    marginTop: 5,
    paddingHorizontal: 20,
    alignItems: "baseline",
    textAlign: "left",
  },
});

const PDFProfile = () => {
  return (
    <View>
      <Text style={styles.description}>{aboutmeData.description}</Text>
    </View>
  );
};

export default PDFProfile;
