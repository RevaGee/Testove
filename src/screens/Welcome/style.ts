import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: 26,
      justifyContent: 'center',
    },
    input3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input: {
      width: 163,
      height: 136,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      fontSize: 18,
      borderRadius: 21,
    },
    input2: {
      width: 163,
      height: 136,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#fff',
      marginBottom: 20,
      fontSize: 18,
      borderRadius: 21,
      top: 80,
    },
    image: {
      width: 120,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#FA8A34',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 16,
      width: '80%',
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
  });
