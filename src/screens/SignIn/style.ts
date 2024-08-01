import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    safeArea: {
      padding: 16,
    },
    container: {
      height: '100%',
      backgroundColor: '#fff',
      borderRadius: 27,
    },
    childContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 15,
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    textInputContainer: {
      paddingHorizontal: 16,
    },
    childText: {
      fontWeight: 400,
      fontSize: 15,
      color: '#606773',
      paddingTop: 5,
    },
    icon: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#F2FAF7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 16,
      padding: 15,
      marginTop: 10,
    },
    passwordTextIput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 16,
      padding: 15,
      flex: 1,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
        marginTop: 10,
    },
    eyeIcon: {
      right: 10,
      height: '100%',
        justifyContent:'center',
      position: 'absolute',
    },
    errorText: {
      color: 'red',
      marginTop: 10,
    },
    button: {
      backgroundColor: '#FA8A34',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 16,
      width: '95%',
      alignSelf: 'center',
    },
    space: {
      marginTop: 20,
    },
    signIn: {
      fontWeight: '500',
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
      paddingTop: '10%',
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
  });
