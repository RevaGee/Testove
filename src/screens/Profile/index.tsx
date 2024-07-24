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
import Arrow from '../../assets/icon/Vector.svg';
import {
  SafeAreaContext,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const Profile = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const style = styles();
  const handler = () => {
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.backButton}>
          <Arrow />
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <Text style={style.settings}>Settings</Text>
        <View style={style.textInputContainer}>
          <View style={style.childContainer}>
            <View style={style.icon} />
            <Text style={style.textContainer}>John doe</Text>
          </View>

          <View style={style.inputContainer}>
            <View style={style.childContainer}>
              <Text style={style.textContainer}>Name</Text>
            </View>

            <View style={style.childContainer}>
              <Text style={style.textContainer}>E-mail</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
