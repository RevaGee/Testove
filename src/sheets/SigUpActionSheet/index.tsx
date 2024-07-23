// SignUpActionSheet.js
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { styles } from './style';

const SignUpActionSheet = React.forwardRef((props, ref) => {
  const style = styles();

  return (
    <ActionSheet ref={ref}>
      <View style={style.content}>
        <View style={style.titleContainer}>
          <TouchableOpacity style={style.cancelContainer}>
            <Text style={style.cancelStyle}>{'X'}</Text>
          </TouchableOpacity>
          <Text style={style.titleStyle}>{'Sign Up'}</Text>
        </View>
        {/* Add your content here */}
      </View>
    </ActionSheet>
  );
});

export default SignUpActionSheet;
