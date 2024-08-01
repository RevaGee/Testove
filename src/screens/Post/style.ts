import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    header: {
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 28,
    },
    container: {
      marginTop: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatContainer: {
      backgroundColor: '#F2F3F5',
      padding: 16,
    },
    testHeaderText: {
      color: '#06070A',
      fontSize: 15,
      fontWeight: 500,
    },
    postContainer: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 16,
      bottom: 16,
      margin: 16,
    },
    childPostText: {
      fontWeight: 400,
      fontSize: 13,
      color: '#606773',
      paddingBottom: 5,
    },
    textPost: {
      fontSize: 15,
      fontWeight: 400,
      color: '#606773',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000',
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    backButton: {
      marginRight: 16,
      position: 'absolute',
      left: 20,
      bottom: '80%',
      zIndex: 1,
    },
    image: {
      top: 30,
    },
  });
