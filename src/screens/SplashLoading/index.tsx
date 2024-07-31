import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { styles } from './style';

const SplashLoading = () => {
    return (
        <ImageBackground
            source={require('../../assets/Launch.png')}
            resizeMode="cover"
            style={styles.bgImage}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.logoContainer}></View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SplashLoading;
