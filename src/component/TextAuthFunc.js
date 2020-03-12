import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AppStyle from '../Config/AppStyle';

const TextFunc = props => {
  const {
    placeholder,
    refField,
    meta: {error, touched},
    input: {onChange, value},
    secureTextEntry,
  } = props;

  return (
    <View>
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput
        ref={refField}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        returnKeyType="next"
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.error}>
        {touched && error ? '* ' + {error} : null}
      </Text>
      {touched && error && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
};
export default TextFunc;

const styles = StyleSheet.create({
  input: {
    marginTop: '1%',
    height: AppStyle.responsiveHeight(6.5),
    width: '100%',
    borderWidth: 1,
    borderColor: AppStyle.COLOR.Zumthor,
    borderRadius: AppStyle.countPixelRatio(5),
    backgroundColor: '#f9f9f9',
  },
  label: {
    color: AppStyle.COLOR.slateGrey,
    // marginTop: '2%',
  },
  error: {
    // margin: '1%',
    // marginBottom: '1.5%',
    color: AppStyle.COLOR.RED,
    fontSize: AppStyle.fontSizeH4_5,
  },
});
