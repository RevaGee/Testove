import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { styles } from './style.ts';
import CustomHeader from '../Header';
import { login } from '../../services/api/auth.ts';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const style = styles();

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '' };

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
      const loginResponse = await login('emilys', 'emilyspass');
      console.log(loginResponse);

      if (
        email === loginResponse.email &&
        password === '101302835'
      ) {
        navigation.navigate('CreatePin');
      } else {
        setErrors({ ...errors, email: 'Invalid email or password' });
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
            {errors.email ? (
              <Text style={style.errorText}>{errors.email}</Text>
            ) : null}
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
            {errors.password ? (
              <Text style={style.errorText}>{errors.password}</Text>
            ) : null}
          </View>
          <View style={style.buttonsContainer}>
            <TouchableOpacity style={style.button} onPress={handleLogin}>
              <Text style={style.signUp}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={signUpHandler}>
              <Text style={[style.signIn, style.space]}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
