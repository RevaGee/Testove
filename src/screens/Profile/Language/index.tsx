import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { styles } from './style.ts';
import Arrow from '../../../assets/icon/Vector.svg';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Language = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const style = styles();

  const changeLanguage = async (lng: string) => {
    await AsyncStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
    navigation.goBack();
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
        <Text style={style.settings}>{t('Settings')}</Text>
        <View style={style.textInputContainer}>
          <View style={style.inputContainer}>
            <TouchableOpacity onPress={() => changeLanguage('en')}>
              <Text style={style.childContainer}>{t('English')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage('ar')}>
              <Text style={style.childContainer}>{t('Arabic')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Language;
