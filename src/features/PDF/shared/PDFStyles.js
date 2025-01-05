import { StyleSheet } from "@react-pdf/renderer";

export const commonStyles = StyleSheet.create({
  heading: {
    fontSize: 16,
    marginTop: 4,
    marginBottom: 5,
    textAlign: "center",
    color: "hsla(210, 100%, 45%, 0.9)",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10,
    textDecoration: "underline",
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 20,
  },
  notes: {
    fontSize: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
  link: {
    textDecoration: "none",
    fontSize: 12,
    marginRight: 10,
    color: "black",
    marginBottom: 3,
  },
  headerTitle: {
    fontSize: 24,
    marginBottom: 5,
  },
});
