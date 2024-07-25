import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    safeArea: {
      padding: 16,
    },
    container: {
      padding: 16,
    },
    postContainer: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 16,
      marginTop: 15,
    },
    textPost: {
      fontSize: 15,
      fontWeight: 400,
      color: '#606773',
      marginTop: 10,
    },
    headerText: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    flatText: {
      fontSize: 15,
      fontWeight: 500,
    },
    childPostText: {
      fontWeight: 400,
      fontSize: 13,
      color: '#858C94',
      paddingTop: 5,
    },
    passwordTextIput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 16,
      padding: 15,
      marginTop: 10,
      flex: 1,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
