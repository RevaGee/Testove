import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white',
      elevation: 4,
    },
    backButton: {
      marginRight: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
