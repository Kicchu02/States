import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../Styles";

export default function WelcomePage() {
  return (
    <View style={style.container}>
      <Text style={style.textHeaderStyle}>WELCOME TO STATES APP!</Text>
      <TouchableOpacity style={style.buttonStyle}>
        <Text style={style.butonTextStyle}>Click on the correct state</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonStyle}>
        <Text style={style.butonTextStyle}>Enter correct state name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonStyle}>
        <Text style={style.butonTextStyle}>Quiz on states</Text>
      </TouchableOpacity>
    </View>
  );
}
