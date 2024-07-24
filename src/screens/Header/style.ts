import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    header: {
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButton: {
      marginRight: 16,
      position: 'absolute',
      left: 20,
      zIndex: 1,
    },
    pattern: {
      marginTop: '80%',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
