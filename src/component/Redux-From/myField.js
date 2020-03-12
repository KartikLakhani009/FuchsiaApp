import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const myField = props => {
  // console.log('myFields : ', props);
  console.log('Touched : value changes : ', props.meta.touched);
  const {
    placeholder,
    refField,
    meta: {error, touched},
    input: {onChange, value},
    // TextInput: {onChangeText},
  } = props;
  console.log('value', value);

  return (
    <View>
      {/* <Text>{label}</Text> */}
      <TextInput
        ref={refField}
        placeholder={placeholder}
        style={{
          marginTop: 10,
          height: 50,
          width: 200,
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          borderBottomEndRadius: 5,
        }}
        value={value}
        onChangeText={onChange}
        // blurOnSubmit={true}
        returnKeyType="next"
      />
      {touched && error && <Text style={{color: 'red'}}>{error}</Text>}
      {/* <Text style={{marginTop: 50, color: 'red'}}>{error}</Text> */}
    </View>
  );
};

export default myField;
