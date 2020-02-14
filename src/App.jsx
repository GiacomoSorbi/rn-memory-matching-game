import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { generateBoard } from "./utils";
import CardContainer from "./components/CardContainer";
// import SettingsModal from "./components/SettingsModal";

export default function App() {
  // const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);
  const [cards, setCards] = useState([]);
  const onGameStart = () => setCards(generateBoard(12));
  // const toggleSettingsModal = () =>
  //   setSettingsModalVisible(!isSettingsModalVisible);

  return (
    <View style={styles.container}>
      {cards.length ? (
        <>
          <CardContainer cards={cards} />
          <Button title="Restart" onPress={onGameStart} />
        </>
      ) : (
        <>
          <Text>Test your memory!</Text>
          <Button title="Start" onPress={onGameStart} />
        </>
      )}
      {/* <SettingsModal visible={isSettingsModalVisible} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
