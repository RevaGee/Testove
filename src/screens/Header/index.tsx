import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import SvgUri from 'react-native-svg-uri';

import { styles } from './style.ts';

const CustomHeader = () => {
  const navigation = useNavigation();
  const style = styles();
  return (
    <View style={style.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.backButton}>
        {/*<SvgUri svgXmlData={require('../../assets/arrow.svg')} />*/}
      </TouchableOpacity>
      <Text style={style.title}></Text>
    </View>
  );
};

export default CustomHeader;
