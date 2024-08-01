import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Lending from '../../assets/icon/lendingIcon.svg';
import RealEstate from '../../assets/icon/realEstate.svg';
import ETFs from '../../assets/icon/etfs.svg';
import Commodities from '../../assets/icon/commodities.svg';
import Crypto from '../../assets/icon/crypto.svg';
import { styles } from './style.ts';
import { useTranslation } from 'react-i18next';

const Welcome = ({ navigation }) => {
  const { t } = useTranslation();
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
            <View style={style.input}>
              <RealEstate />
            </View>
            <View style={style.input}>
              <ETFs />
            </View>
          </View>
          <View style={style.input2}>
            <View style={style.input}>
              <Lending />
            </View>
            <View style={style.input}>
              <Commodities />
            </View>
            <View style={style.input}>
              <Crypto />
            </View>
          </View>
        </View>
        <View style={style.buttonsContainer}>
          <TouchableOpacity onPress={signInHandler}>
            <Text style={style.signIn}>{t('SignIn')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={signUpHandler}
            style={[style.button, style.buttonSpacing]}>
            <Text style={style.signUp}>{t('SignUp')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
