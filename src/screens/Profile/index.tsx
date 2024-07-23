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

const Profile = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const style = styles();
  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '' };

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Password validation
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

  const handler = () => {
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.header}>
        <Image
          source={require('../../assets/pattern.png')}
          style={style.pattern}
        />
      </View>
      <View style={style.container}>
        <View style={style.childContainer}>
          <View style={style.icon}>
            <Image
              source={require('../../assets/addIcon.png')}
              style={style.iconStyle}
            />
          </View>
          <View style={style.textContainer}>
            <Text>Sign Up</Text>
            <Text style={style.childText}>Personal Account</Text>
          </View>
        </View>
        <View style={style.textInputContainer}>
          <View style={style.inputContainer}>
            <Text style={style.textStyle}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              style={style.textInput}
            />
            {errors.name ? (
              <Text style={style.errorText}>{errors.name}</Text>
            ) : null}
          </View>

          <View style={style.inputContainer}>
            <Text style={style.textStyle}>E-mail</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              style={style.textInput}
            />
            {errors.email ? (
              <Text style={style.errorText}>{errors.email}</Text>
            ) : null}
          </View>
          <View style={style.inputContainer}>
            <Text style={style.textStyle}>Password</Text>
            <View style={style.passwordContainer}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                style={style.passwordTextIput}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                  source={
                    showPassword
                      ? require('../../assets/passwordSingUpIcon.png')
                      : require('../../assets/passwordSingUpIcon.png')
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
            <TouchableOpacity style={style.button} onPress={handler}>
              <Text style={style.signUp}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
