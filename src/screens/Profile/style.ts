import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    safeArea: {
      padding: 16,
      backgroundColor: '#fff',
    },
    header: {
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    settings: {
      color: '#06070A',
      fontSize: 22,
      marginLeft: 16,
      fontWeight: 'bold',
    },
    backButton: {
      marginRight: 16,
      position: 'absolute',
      left: 20,
      zIndex: 1,
    },
    container: {
      height: '100%',
      backgroundColor: '#fff',
    },
    headerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 15,
      padding: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 16,
      marginTop: 10,
    },
    childContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    space: {
      justifyContent: 'space-between',
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
    childText: {
      fontWeight: 400,
      fontSize: 15,
      color: '#606773',
      paddingTop: 5,
    },
    icon: {
      width: 32,
      height: 32,
      borderRadius: 50,
      backgroundColor: '#EBEFF5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 32,
      height: 32,
      borderRadius: 50,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      marginTop: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 16,
      padding: 15,
      marginTop: 10,
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
    eyeIcon: {
      marginTop: 10,
      marginLeft: -40,
    },
    errorText: {
      color: 'red',
      marginTop: 5,
    },
    submitButton: {
      backgroundColor: '#007BFF',
      borderRadius: 8,
      padding: 15,
      alignItems: 'center',
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    button: {
      backgroundColor: '#FA8A34',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 16,
      width: '95%',
      alignSelf: 'center',
    },
    buttonSpacing: {
      marginTop: 20,
    },
    signIn: {
      fontWeight: '600',
      color: '#FA8A34',
      fontSize: 15,
      alignSelf: 'center',
    },
    signUp: {
      color: '#fff',
      fontSize: 15,
      fontWeight: '600',
      alignSelf: 'center',
    },
    buttonsContainer: {
      paddingTop: '50%',
    },
    textStyle: {
      fontWeight: 400,
      fontSize: 15,
      color: '#606773',
      marginLeft: 15,
    },
    textContainer: {
      marginLeft: 10,
    },
    pattern: {
      marginTop: '87%',
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
  });
