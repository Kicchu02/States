import { StyleSheet } from "react-native";
import { Color } from "./types/Themes";

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.Beige,
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: Color.Babypink,
    marginTop: 20,
    margin: 55,
    padding: 20,
    borderRadius: 40,
  },
  butonTextStyle: {
    color: Color.Darkgrey,
    textAlign: "center",
    fontSize: 20,
  },
  textHeaderStyle: {
    textAlign: "center",
    fontSize: 35,
    marginTop: 150,
    marginBottom: 50,
    color: Color.Softcoral,
    fontWeight: "bold",
  },
});

export default style;
