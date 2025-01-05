import { StyleSheet, Text } from "@react-pdf/renderer";
import { educationData } from "../../data/educationData";
import { commonStyles } from "./shared/PDFStyles";

const styles = StyleSheet.create({
  ...commonStyles,
});

const PDFEducation = () => {
  return (
    <div>
      <Text style={styles.heading}>Education</Text>
      <Text style={styles.title}>
        {educationData.degree}. {educationData.school} {educationData.date}
      </Text>
      {/* <Text style={styles.title}>
        {educationData.school} {educationData.date}
      </Text> */}
      <Text style={styles.description}>{educationData.description}</Text>
      <Text style={styles.notes}>
        {/* <Link href={educationData.finalProjectUrl}>
          {educationData.finalProjectName}
        </Link>
        {": "} */}
        {/* {educationData.notes} */}
      </Text>
    </div>
  );
};

export default PDFEducation;
