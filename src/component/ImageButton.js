import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const ImageButton = props => {
  const {
    source,
    buttonStyle,
    imageStyle,
    btnAction,
    colors,
    lgstyle,
    start,
    end,
  } = props;
  return (
    <LinearGradient colors={colors} style={lgstyle} start={start} end={end}>
      <TouchableOpacity style={buttonStyle} onPress={btnAction}>
        <Image source={source} style={imageStyle} />
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default ImageButton;
