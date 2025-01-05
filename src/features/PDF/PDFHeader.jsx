import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import headerData from "../../data/headerData";
import PDFProfile from "./PDFProfile";
import { commonStyles } from "./shared/PDFStyles";

const styles = StyleSheet.create({
  header: {
    ...commonStyles.section,
    alignItems: "center",
    borderBottom: "2px solid black",
  },
  heading: {
    ...commonStyles.headerTitle,
    fontSize: 32,
    marginBottom: 5,
    color: "rgba(0, 20, 50, 0.9)",
  },
  subHeading: {
    ...commonStyles.subtitle,
    fontSize: 18,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 7,
    width: "100%",
  },
  link: {
    ...commonStyles.link,
  },
});

const PDFHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{headerData.name}</Text>
      <Text style={styles.subHeading}>{headerData.title}</Text>
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
