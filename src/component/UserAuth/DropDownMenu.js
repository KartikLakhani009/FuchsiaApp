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
          //TODO : Error ReferenceError: onchange is not defined
          // onValueChange={onchange}
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
    // marginTop: '2%',
  },
  input: {
    flex: 1,
    height: AppStyle.responsiveHeight(6),
    // width: '70%',
    borderWidth: 1,
    borderColor: AppStyle.COLOR.Zumthor,
    borderRadius: AppStyle.countPixelRatio(5),
    backgroundColor: '#f9f9f9',
    marginBottom: AppStyle.countPixelRatio(10),
    fontSize: AppStyle.fontSizeParagraph,
  },
  error: {
    // margin: '1%',
    // marginBottom: '1.5%',
    color: AppStyle.COLOR.RED,
    fontSize: AppStyle.fontSizeH4_5,
  },
});
