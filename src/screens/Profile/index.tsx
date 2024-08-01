import React, { useContext } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style.ts';
import Arrow from '../../assets/icon/Vector.svg';
import AppContext from '../auth/AuthContext.tsx';
import Globe from '../../assets/icon/Globe.svg';
import ArrowRight from '../../assets/icon/arrow-right.svg';
import Logout from '../../assets/icon/logout.svg';
import { useTranslation } from 'react-i18next';

const Profile = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);
  const { state } = useContext(AppContext);
  const { t } = useTranslation();
  const style = styles();

  const handler = () => {
    navigation.navigate('Language');
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
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
          <View style={style.headerContainer}>
            <Image source={{ uri: state.image }} style={style.image} />
            <Text
              style={
                style.textContainer
              }>{`${state.name} ${state.lastName}`}</Text>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.textStyle}>{t('Basic')}</Text>
            <TouchableOpacity onPress={handler} style={style.space}>
              <View style={style.childContainer}>
                <Globe style={style.svg} />
                <Text>{t('Language')}</Text>
              </View>
              <ArrowRight />
            </TouchableOpacity>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.textStyle}>{t('Other')}</Text>
            <TouchableOpacity onPress={handleLogout} style={style.space}>
              <View style={style.childContainer}>
                <Logout style={style.svg} />
                <Text>{t('LogOut')}</Text>
              </View>
              <ArrowRight />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
