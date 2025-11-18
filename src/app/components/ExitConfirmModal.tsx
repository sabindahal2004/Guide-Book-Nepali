import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';

type ExitConfirmationProps = {
  visible: boolean;
  onCancel: () => void;
  onExit: () => void;
};

export default function ExitConfirmationModal({
  visible,
  onCancel,
  onExit,
}: ExitConfirmationProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 25,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', marginBottom: 10}}>
          Do you want to exit the app?
          </Text>

          <Text style={{fontSize: 14, color: '#555', marginBottom: 20}}>
            Are you sure you want to exit the application?
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={onCancel}>
              <Text style={{marginRight: 25, fontSize: 16, color: '#007AFF'}}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onExit}>
              <Text style={{fontSize: 16, color: 'red'}}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
