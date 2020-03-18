import React from 'react';
import {View, Text, StyleSheet, Picker, TextInput} from 'react-native';

import AppStyle from '../../Config/AppStyle';
import {AppImages} from '../../Images/index';

const DropDownList = props => {
  const {
    placeholder,
    refField,
    meta: {error, touched},
    input: {onChange, value, ...inputProps},
    children,
    returnKeyType,
    onSubmitEdit,
    onChangeItem,
    ...pickerProps
  } = props;
  return (
    <View style={{flex: 1}}>
      <Text style={styles.label}>{placeholder}</Text>
      <View style={styles.container}>
        <Picker
          selectedValue={'select below'}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            onChangeItem(itemValue, itemIndex)
          }
          {...inputProps}
          {...pickerProps}>
          {children}
        </Picker>
        <TextInput
          ref={refField}
          placeholder={placeholder}
          value={value}
          style={styles.input}
          onChangeText={onChange}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEdit}
          keyboardType={'number-pad'}
        />
      </View>
    </View>
  );
};
export default DropDownList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    color: AppStyle.COLOR.slateGrey,
    fontSize: AppStyle.fontSizeParagraph,
  },
  input: {
    flex: 1,
    height: AppStyle.countPixelRatio(50),
    borderWidth: 1,
    borderColor: AppStyle.COLOR.Zumthor,
    borderRadius: AppStyle.countPixelRatio(5),
    backgroundColor: AppStyle.COLOR.WHITE,
    marginBottom: AppStyle.countPixelRatio(8),
    fontSize: AppStyle.fontSizeParagraph,
    fontFamily: AppStyle.fontSemiBold,
  },
  error: {
    color: AppStyle.COLOR.RED,
    fontSize: AppStyle.fontSizeH4_5,
  },
});
