import React from 'react'
import { Button, Modal, Text } from 'react-native'

const SettingsModal = ({visible}) => (<Modal animationType="fade"  visible={visible}>
    <Button title="Press me" />
    <Text>visible: {"" + visible} {JSON.stringify(Platform)}</Text>
</Modal>)

export default SettingsModal
