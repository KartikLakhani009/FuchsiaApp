import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

// const buttonMode = {
//   text: 'TextButton',
//   image: 'ImageButton',
//   lg: 'LinearGradientButton',
// };

const CustomButton = props => {
  const {
    label,
    buttonStyle,
    lableStyle,
    btnAction,
    buttonMode,
    source,
    imageStyle,
    colors,
    lgstyle,
    start,
    end,
  } = props;

  const button = ['TextButton', 'ImageButton', 'LinearGradientButton'];

  switch (buttonMode) {
    case button[0]:
      return (
        <TouchableOpacity style={buttonStyle} onPress={btnAction}>
          <Text style={lableStyle}>{label}</Text>
        </TouchableOpacity>
      );
    case button[1]:
      return (
        <TouchableOpacity style={buttonStyle} onPress={btnAction}>
          <Image source={source} style={imageStyle} />
        </TouchableOpacity>
      );
    case button[2]:
      return (
        <LinearGradient colors={colors} style={lgstyle} start={start} end={end}>
          <TouchableOpacity style={buttonStyle} onPress={btnAction}>
            <Image source={source} style={imageStyle} />
          </TouchableOpacity>
        </LinearGradient>
      );
    default:
      return null;
  }
};
export default CustomButton;
