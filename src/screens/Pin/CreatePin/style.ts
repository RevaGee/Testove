import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor:'#fff',

    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 15,
      fontWeight:500,
      marginBottom: 20,
    },
    childText: {
      fontWeight: 400,
      fontSize: 15,
      color: '#606773',
      paddingTop: 5,
    },
    pinContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: 20,
    },
    pinDot: {
      width: 16,
      height: 16,
      borderRadius: 8,
      top:30,
      backgroundColor: '#ccc',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      marginBottom: 20,
      width: '100%',
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
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    errorText: {
      color: 'red',
      marginBottom: 20,
    },
    list:{
      marginTop:'40%',
    },
    flat:{
      width: 90,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 16,
    },
    flatText:{
      fontSize:28,
      fontWeight: "700",
    },
    signIn: {
      color: '#fff',
      fontSize: 15,
      fontWeight: '600',
      alignSelf: 'center',
    },
    icon: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#F2FAF7',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center'
    },
    header: {
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    backButton: {
      marginRight: 16,
      position: 'absolute',
      left: 20,
      zIndex: 1,
    },
  });
};
