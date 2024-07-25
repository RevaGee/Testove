import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style.ts';
import Arrow from '../../../assets/icon/Vector.svg';

const Language = ({ navigation }) => {
  const style = styles();
  const handler = () => {
    navigation.navigate('Profile', {
      screen: 'Language',
    });
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
          <View style={style.inputContainer}>
            <TouchableOpacity onPress={handler}>
              <Text style={style.childContainer}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.childContainer}>Arabic</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Language;
