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
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const { t } = useTranslation();
  const style = styles();

  const validate = (name: string, email: string, password: string) => {
    const errors: { name: string; email: string; password: string } = { name: '', email: '', password: '' };

    if (!name.trim()) {
      errors.name = t('NameError');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = t('emailError');
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
    if (!password || !passwordRegex.test(password)) {
      errors.password = t('PassError');
    }

    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate(name, email, password);
    if (Object.values(validationErrors).some(error => error !== '')) {
      setErrors(validationErrors);
    } else {
      console.log('Form is valid!');
    }
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
              <Text>{t('SignUp')}</Text>
              <Text style={style.childText}>{t('PersonalAccount')}</Text>
            </View>
          </View>
          <View style={style.textInputContainer}>
            <View style={style.inputContainer}>
              <Text style={style.textStyle}>{t('Name')}</Text>
              <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder={t('EnterYourName')}
                  returnKeyType="done"
                  keyboardType="default"
                  style={style.textInput}
              />
              {errors.name ? (
                  <Text style={style.errorText}>{errors.name}</Text>
              ) : <View style={style.errorText}/>}
            </View>

            <View style={style.inputContainer}>
              <Text style={style.textStyle}>{t('E-mail')}</Text>
              <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder={t('EnterYourEmail')}
                  returnKeyType="done"
                  keyboardType="default"
                  style={style.textInput}
              />
              {errors.email ? (
                  <Text style={style.errorText}>{errors.email}</Text>
              ) : <View style={style.errorText}/>}
            </View>
            <View style={style.inputContainer}>
              <Text style={style.textStyle}>{t('Password')}</Text>
              <View style={style.passwordContainer}>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder={t('EnterYourPassword')}
                    secureTextEntry={!showPassword}
                    returnKeyType="done"
                    keyboardType="default"
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
              ) : <View style={style.errorText}/>}
            </View>
          </View>
          <TouchableOpacity style={style.button} onPress={handleSubmit}>
            <Text style={style.signUp}>{t('Continue')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

export default SignUp;
