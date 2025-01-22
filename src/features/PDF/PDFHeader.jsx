import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import headerData from "../../data/headerData";
import PDFProfile from "./PDFProfile";
import { commonStyles } from "./shared/PDFStyles";

const styles = StyleSheet.create({
  header: {
    ...commonStyles.section,
    alignItems: "center",
    borderBottom: "1px solid black",
    paddingBottom: 4,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  name: {
    fontSize: 22,
    color: "rgba(0, 20, 50, 0.9)",
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 14,
    color: "rgba(0, 20, 50, 0.9)",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 2,
    width: "100%",
  },
  link: {
    ...commonStyles.link,
  },
});

const PDFHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{headerData.name}</Text>
        <Text style={styles.jobTitle}>{headerData.title}</Text>
      </View>
      <PDFProfile />
      <View style={styles.contact}>
        <Text style={styles.link}>Haifa, Israel.</Text>
        <Link
          style={styles.link}
          src={`mailto:${headerData.email.emailAddress}`}
        >
          {headerData.email.emailAddress}
        </Link>
        <Link style={styles.link} src={headerData.phone.href}>
          {headerData.phone.phoneNumber}
        </Link>
      </View>
    </View>
  );
};

export default PDFHeader;
