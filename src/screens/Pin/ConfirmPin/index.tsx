import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import DeleteIcon from '../../../assets/icon/Union.svg';
import Arrow from '../../../assets/icon/Vector.svg';
import Mobile from "../../../assets/icon/mobile.svg";
import ReactNativeBiometrics from "react-native-biometrics";

const ConfirmPin = ({ navigation, route }) => {
  const [confirmPin, setConfirmPin] = useState<string>('');
  const [error, setError] = useState<string>('');
  const style = styles();
  const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];
  const pinLength = 5;
  const { pin } = route.params;
  const rnBiometric = new ReactNativeBiometrics();
  const validateConfirmPin = (): boolean => {
    if (confirmPin.length === pinLength && confirmPin === pin) {
      return true;
    } else {
      setError('Pins do not match');
      return false;
    }
  };

  const authenticateWithBiometrics = async () => {
    try {
      const promptResult = await rnBiometric.simplePrompt({ promptMessage: 'Confirm your identity' });
      const { success } = promptResult;

      if (success) {
        navigation.navigate('Main');
      }
    } catch (error) {
      console.log(error)
    }finally {
      navigation.navigate('Main');
    }
  };


  const handleSubmit = () => {
    if (validateConfirmPin()) {
      authenticateWithBiometrics();
    }
  };

  const handlePress = (item: number | string) => {
    if (item === 'del') {
      setConfirmPin(prevPin => prevPin.slice(0, -1));
    } else if (typeof item === 'number' && confirmPin.length < pinLength) {
      setConfirmPin(prevPin => prevPin + item.toString());
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
        <Text style={style.title}>Repeat your Pin code</Text>
        <Text style={style.childText}>enter the same 5 digit code:</Text>
        <View style={style.pinContainer}>
          {Array(pinLength)
            .fill('')
            .map((_, index) => (
              <View
                key={index}
                style={[
                  style.pinDot,
                  {
                    backgroundColor:
                      confirmPin.length > index ? '#FA8A34' : '#ccc',
                  },
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
                  <DeleteIcon/>
                ) : (
                  <Text style={style.flatText}>{item}</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={style.button} onPress={handleSubmit}>
          <Text style={style.signIn}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmPin;
