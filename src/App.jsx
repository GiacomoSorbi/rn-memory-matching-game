import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SettingsModal from './components/SettingsModal'

export default function App() {
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false)
  const toggleSettingsModal = () => setSettingsModalVisible(!isSettingsModalVisible)

  return (
    <View style={styles.container}>
      <Text>visible: {"" + isSettingsModalVisible}</Text>
      <Button title="Press me" onPress={toggleSettingsModal} />
      <SettingsModal visible={isSettingsModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
