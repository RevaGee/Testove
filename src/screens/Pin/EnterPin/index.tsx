import React, { useContext, useEffect, useState } from 'react';
import {
  FlatList, Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import DeleteIcon from '../../../assets/icon/Union.svg';
import Mobile from '../../../assets/icon/mobile.svg';
import AppContext from '../../auth/AuthContext.tsx';
import { Apilogin } from '../../../services/api/auth.ts';

const ConfirmPin = ({ navigation }) => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);
  const [confirmPin, setConfirmPin] = useState<string>('');
  const [name, setName] = useState<string>(state.name);
  const [lastName, setLastname] = useState<string>(state.lastName);
  const [image, setImage] = useState<string>(state.image);
  const [error, setError] = useState<string>('');
  const style = styles();
  const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];
  const pinLength = 5;

  const validateConfirmPin = (): boolean => {
    if (confirmPin.length === pinLength && confirmPin === state.pinCode) {
      return true;
    } else {
      setError('Pins do not match');
      return false;
    }
  };

  const authenticateWithBiometrics = async () => {
    navigation.navigate('MainTabs');
  };

  const handleSubmit = () => {
    if (validateConfirmPin()) {
      authenticateWithBiometrics();
    }
  };
  const handleChangeAccount = () => {
    dispatch({ type: 'LOGOUT' });
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
          <Image source={{ uri: image }} style={style.icon} />
      </View>
      <View style={style.container}>
        <Text style={style.title}>{`${name} ${lastName}`}</Text>
        <TouchableOpacity onPress={handleChangeAccount}>
          <Text style={style.title}>Change Account</Text>
        </TouchableOpacity>
        <Text style={style.childText}>enter 5 digit code:</Text>
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
                  <DeleteIcon />
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
