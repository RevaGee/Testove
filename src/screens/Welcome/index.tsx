import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { styles } from './style.ts';

const Welcome = ({ navigation }) => {
  const style = styles();
  const signUpHandler = () => {
    navigation.navigate('SignUp');
  };
  const signInHandler = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.input3}>
          <View>
            <Image
              style={style.input}
              source={require('../../assets/iconx64.png')}
            />
            <Image
              style={style.input}
              source={require('../../assets/iconx64.png')}
            />
            <Image
              style={style.input}
              source={require('../../assets/iconx64.png')}
            />
          </View>
          <View>
            <Image
              style={style.input2}
              source={require('../../assets/iconx64.png')}
            />
            <Image
              style={style.input2}
              source={require('../../assets/iconx64.png')}
            />
            <Image
              style={style.input2}
              source={require('../../assets/iconx64.png')}
            />
          </View>
        </View>
        <View style={style.buttonsContainer}>
          <TouchableOpacity onPress={signInHandler}>
            <Text style={style.signIn}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={signUpHandler}
            style={[style.button, style.buttonSpacing]}>
            <Text style={style.signUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
