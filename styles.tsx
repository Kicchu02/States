import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF7E6",
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  buttonStyle: {
    // TODO: Add generic button style for touchable opacity component
    backgroundColor: "#FFC1C1",
    marginTop: 20,
    margin: 40,
    padding: 20,
    borderRadius: 40,
  },
  butonTextStyle: {
    //TODO
    color: "#4A4A4A", // dark grey
    textAlign: "center",
    fontSize: 20,
  },
  textHeaderStyle: {
    // TODO
    textAlign: "center",
    fontSize: 35,
    marginTop: 200,
    marginBottom: 50,
    color: "#FF6F61",
    fontWeight: "bold",
  },
});

export default style;
