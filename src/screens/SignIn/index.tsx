import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { styles } from './style';
import CustomHeader from '../Header';
import { Apilogin } from '../../services/api/auth';
import AppContext from '../auth/AuthContext.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);

  const [email, setEmail] = useState<string>(state.email);
  const [password, setPassword] = useState<string>(state.password);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const style = styles();

  useEffect(() => {
    setEmail(state.email);
    setPassword(state.password);
  }, [state]);

  const validate = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be 8-64 characters, including uppercase, lowercase letters, and special characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    try {
      const loginResponse = await Apilogin('emilys', 'emilyspass');

      await AsyncStorage.setItem(
        'userData',
        JSON.stringify({
          name: loginResponse.firstName,
          lastName: loginResponse.lastName,
          image: loginResponse.image,
        }),
      );

      if (email === loginResponse.email && password === '101302835') {
        dispatch({ type: 'LOGIN', token: 'your_token', email, password });
        navigation.navigate('CreatePin');
      } else {
        setErrors({ ...errors, email: 'Error: Invalid E-mail or Password' });
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const signUpHandler = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <CustomHeader />
      <View style={style.container}>
        <View style={style.childContainer}>
          <View style={style.icon}>
            <Image
              source={require('../../assets/addIcon.png')}
              style={style.iconStyle}
            />
          </View>
          <View style={style.textContainer}>
            <Text>Login</Text>
            <Text style={style.childText}>Personal Account</Text>
          </View>
        </View>
        <View style={style.textInputContainer}>
          {errors.email || errors.password ? (
            <Text style={style.errorText}>{errors.email}</Text>
          ) : null}
          <View style={style.space}>
            <Text style={style.textStyle}>E-mail</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              returnKeyType="done"
              keyboardType="default"
              style={style.textInput}
            />
          </View>
          <View style={style.space}>
            <Text style={style.textStyle}>Password</Text>
            <View style={style.passwordContainer}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                returnKeyType="done"
                keyboardType="default"
                style={style.passwordTextIput}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                  source={
                    showPassword
                      ? require('../../assets/passwordHideIcon.png')
                      : require('../../assets/passwordHideIcon.png')
                  }
                  style={style.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.buttonsContainer}>
            <TouchableOpacity style={style.button} onPress={handleLogin}>
              <Text style={style.signUp}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={signUpHandler}>
              <Text style={[style.signIn, style.space]}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
