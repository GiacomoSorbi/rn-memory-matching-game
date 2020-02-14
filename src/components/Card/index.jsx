import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = ({ label, visible }) => (
  <View style={styles().card}>
    <Text style={styles().cardText}>{label}</Text>
  </View>
);

const styles = () =>
  StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "black",
      borderRadius: "0.5vmin"
    },
    cardText: {
      fontSize: "5vmin",
      padding: "1.5vmin"
    }
  });

export default Card;
