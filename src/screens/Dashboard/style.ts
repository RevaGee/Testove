import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    header: {
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FA8A34',
      borderRadius: 28,
    },
    container: {
      height: '100%',
      backgroundColor: '#F2F3F5',
    },
      postContainer:{
          backgroundColor: '#fff',
          padding: 16,
          borderRadius: 16,
          marginTop: 15,
      },
      textPost:{
          fontSize: 15,
          fontWeight: 400,
          color: '#606773',
          marginTop: 10,
      },
    childContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 15,
      padding: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 16,
      marginTop: 10,
    },
    textInputContainer: {
      padding: 16,
      borderColor: '#ccc',
      borderRadius: 16,
    },
    icon: {
      width: 32,
      height: 32,
      borderRadius: 50,
      backgroundColor: '#EBEFF5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
    },
    childText: {
      fontWeight: 400,
      fontSize: 13,
      color: '#fff',
      paddingBottom: 5,
    },
      childPostText:{
          fontWeight: 400,
          fontSize: 13,
          color: '#606773',
          paddingBottom: 5,
      },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    inputContainer: {
      marginTop: 20,
    },
    textContainer: {
      marginLeft: 10,
    },
  });
