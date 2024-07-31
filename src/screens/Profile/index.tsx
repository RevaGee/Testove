import React, {useContext} from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style.ts';
import Arrow from '../../assets/icon/Vector.svg';
import AppContext from "../auth/AuthContext.tsx";

const Profile = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);
  const style = styles();

  const handler = () => {
    navigation.navigate('Language');
  };

  const handleLogout = async () => {
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
        <Text style={style.settings}>Settings</Text>
        <View style={style.textInputContainer}>
          <View style={style.childContainer}>
            <View style={style.icon} />
            <Text style={style.textContainer}>John doe</Text>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.textStyle}>Basic</Text>
            <TouchableOpacity onPress={handler}>
              <Text style={style.childContainer}>Language</Text>
            </TouchableOpacity>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.textStyle}>Other</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={style.childContainer}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
