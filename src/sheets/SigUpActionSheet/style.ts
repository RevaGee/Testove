import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    content: {
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      justifyContent: 'center',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    titleStyle: {
      alignSelf: 'center',
      fontWeight: '400',
      color: 'blue',
      lineHeight: 24,
      textAlign: 'center',
    },
    cancelContainer: {
      position: 'absolute',
      right: 2,
      padding: 7,
    },
    cancelStyle: {
      fontWeight: '400',
      color: 'grey',
      lineHeight: 24,
      textAlign: 'center',
    },
    containerStyle: {
      backgroundColor: 'white',
      alignSelf: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 10,
    },
  });
