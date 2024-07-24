import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Arrow from '../../assets/icon/Vector.svg';
import { styles } from './style.ts';

const CustomHeader = () => {
  const navigation = useNavigation();
  const style = styles();
  return (
    <View style={style.header}>
      <Image
        source={require('../../assets/pattern.png')}
        style={style.pattern}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.backButton}>
        <Arrow/>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
