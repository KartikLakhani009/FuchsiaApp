import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton = props => {
  const {label, buttonStyle, lableStyle, btnAction} = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={btnAction}>
      <Text style={lableStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
