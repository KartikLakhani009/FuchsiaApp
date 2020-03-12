import React from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

const DropDownList = props => {
  const {
    input: {onChange, value, ...inputProps},
    children,
    ...pickerProps
  } = props;
  return (
    <View>
      <Picker
        selectedValue={'select below'}
        style={{height: 50, width: 100}}
        onValueChange={value => onchange(value)}
        //TODO : Error ReferenceError: onchange is not defined
        // onValueChange={onchange}
        {...inputProps}
        {...pickerProps}>
        {children}
      </Picker>
    </View>
  );
};
export default DropDownList;
