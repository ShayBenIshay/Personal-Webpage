import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { aboutmeData } from "../../data/aboutmeData";
import { commonStyles } from "./shared/PDFStyles";

const styles = StyleSheet.create({
  ...commonStyles,
  description: {
    ...commonStyles.description,
    paddingHorizontal: 20,
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
