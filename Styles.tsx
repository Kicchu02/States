import { StyleSheet } from "react-native";
import { colors } from "./types/Themes";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: colors.babyPink,
    marginTop: 20,
    margin: 55,
    padding: 20,
    borderRadius: 40,
  },
  butonTextStyle: {
    color: colors.darkGray,
    textAlign: "center",
    fontSize: 20,
  },
  textHeaderStyle: {
    textAlign: "center",
    fontSize: 35,
    marginTop: 150,
    marginBottom: 50,
    color: colors.softCoral,
    fontWeight: "bold",
  },
});

export default style;
