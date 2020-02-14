import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../Card";

const CardContainer = ({ cards, onClick }) => (
  <View style={styles.cardContainer}>
    {cards.map(card => (
      <Card {...card} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100vw",
    height: "100vh"
  }
});

export default CardContainer;
