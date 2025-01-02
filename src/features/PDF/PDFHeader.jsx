import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import headerData from "../../data/headerData";
import PDFProfile from "./PDFProfile";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    borderBottom: "2px solid blue;",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 5,
    color: "rgba(0, 20, 50, 0.9)",
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: 18,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 7,
    width: "100%",
  },
  link: {
    fontSize: 12,
    marginRight: 10,
    textDecoration: "none",
    color: "blue",
    marginBottom: 3,
  },
});

const PDFHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{headerData.name}</Text>
      <Text style={styles.subHeading}>{headerData.title}</Text>
      <PDFProfile />
      <View style={styles.contact}>
        <Link
          style={styles.link}
          src={`mailto:${headerData.email.emailAddress}`}
        >
          {headerData.email.emailAddress}
        </Link>
        <Link style={styles.link} src={headerData.phone.href}>
          {headerData.phone.phoneNumber}
        </Link>
        <Link style={styles.link} src={headerData.gitHub.href}>
          {headerData.gitHub.label}
        </Link>{" "}
      </View>
    </View>
  );
};

export default PDFHeader;
