// CustomKeyboard.js
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

interface CustomKeyboardProps {
  onPress: (button: string) => void;
}

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({onPress}) => {
  const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'C',
    'Enter',
  ];

  return (
    <View style={styles.keyboard}>
      {buttons.map(button => (
        <Button key={button} title={button} onPress={() => onPress(button)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default CustomKeyboard;
