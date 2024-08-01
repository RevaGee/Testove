import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style.ts';
import DeleteIcon from '../../../assets/icon/Union.svg';
import Mobile from '../../../assets/icon/mobile.svg';
import Arrow from '../../../assets/icon/Vector.svg';
import { useTranslation } from 'react-i18next';

const CreatePin = ({ navigation }) => {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { t } = useTranslation();
  const style = styles();
  const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];
  const pinLength = 5;

  const validatePin = (): boolean => {
    if (pin.length === pinLength && /^[0-9]+$/.test(pin)) {
      return true;
    } else {
      setError(t('mustBe5'));
      return false;
    }
  };

  const handleSubmit = () => {
    if (validatePin()) {
      navigation.navigate('ConfirmPin', { pin });
    }
  };

  const handlePress = (item: number | string) => {
    if (item === 'del') {
      setPin(prevPin => prevPin.slice(0, -1));
    } else if (typeof item === 'number' && pin.length < pinLength) {
      setPin(prevPin => prevPin + item.toString());
    }
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.backButton}>
          <Arrow />
        </TouchableOpacity>
        <View style={style.icon}>
          <Mobile />
        </View>
      </View>
      <View style={style.container}>
        <Text style={style.title}>{t('CreatePinCode')}</Text>
        <Text style={style.childText}>{t('enter5')}</Text>
        <View style={style.pinContainer}>
          {Array(pinLength)
            .fill('')
            .map((_, index) => (
              <View
                key={index}
                style={[
                  style.pinDot,
                  { backgroundColor: pin.length > index ? '#FA8A34' : '#ccc' },
                ]}
              />
            ))}
        </View>
        {error ? <Text style={style.errorText}>{error}</Text> : null}
        <FlatList
          data={keyboard}
          scrollEnabled={false}
          numColumns={3}
          style={style.list}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handlePress(item)}
              disabled={item === ''}>
              <View style={style.flat}>
                {item === 'del' ? (
                  <DeleteIcon />
                ) : (
                  <Text style={style.flatText}>{item}</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={style.button} onPress={handleSubmit}>
          <Text style={style.signIn}>{t('Continue')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreatePin;
