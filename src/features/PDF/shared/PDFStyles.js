import { StyleSheet } from "@react-pdf/renderer";

export const commonStyles = StyleSheet.create({
  heading: {
    fontSize: 14,
    marginTop: 2,
    marginBottom: 3,
    textAlign: "center",
    color: "hsla(210, 100%, 45%, 0.9)",
  },
  headerTitle: {
    fontSize: 18,
    marginBottom: 3,
  },
  section: {
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    marginBottom: 2,
    marginLeft: 8,
    textDecoration: "underline",
  },
  subtitle: {
    fontSize: 11,
    marginBottom: 2,
    marginLeft: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    marginBottom: 2,
    marginTop: 2,
    marginLeft: 16,
  },
  notes: {
    fontSize: 9,
    marginBottom: 4,
    marginLeft: 16,
  },
  link: {
    textDecoration: "none",
    fontSize: 10,
    marginRight: 8,
    color: "black",
    marginBottom: 2,
  },
});
