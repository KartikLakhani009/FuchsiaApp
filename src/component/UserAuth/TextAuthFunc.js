import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppStyle from '../../Config/AppStyle';
import {AppImages} from '../../Images/index';

const TextFunc = props => {
  const {
    placeholder,
    refField,
    meta: {error, touched},
    input: {onChange, value},
    secureTextEntry,
    returnKeyType,
    onSubmitEdit,
    TextVisible,
    VisiblityAction,
  } = props;

  return (
    <View>
      <Text style={styles.label}>{placeholder}</Text>
      <View style={styles.inputView}>
        <TextInput
          ref={refField}
          placeholder={placeholder}
          value={value}
          style={styles.input}
          onChangeText={onChange}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEdit}
        />
        {TextVisible && (
          <TouchableOpacity
            style={styles.passVisibleStyleView}
            onPress={VisiblityAction}>
            <Image
              source={AppImages.PassVisible}
              style={styles.passVisibleStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
export default TextFunc;

const styles = StyleSheet.create({
  inputView: {
    marginTop: AppStyle.countPixelRatio(4),
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    height: AppStyle.countPixelRatio(50),
    width: '100%',
    borderWidth: 1,
    borderColor: AppStyle.COLOR.Zumthor,
    borderRadius: AppStyle.countPixelRatio(5),
    backgroundColor: AppStyle.COLOR.WHITE,
    marginBottom: AppStyle.countPixelRatio(8),
    fontSize: AppStyle.fontSizeParagraph,
    fontFamily: AppStyle.fontSemiBold,
  },
  label: {
    color: AppStyle.COLOR.slateGrey,
    fontSize: AppStyle.fontSizeParagraph,
    fontFamily: AppStyle.fontSemiBold,
  },
  error: {
    color: AppStyle.COLOR.RED,
    fontSize: AppStyle.fontSizeH4_5,
    fontFamily: AppStyle.fontRegular,
  },
  passVisibleStyle: {
    height: AppStyle.countPixelRatio(11),
    width: AppStyle.countPixelRatio(17),
    resizeMode: 'stretch',
  },
  passVisibleStyleView: {
    right: '0%',
    position: 'absolute',
    paddingTop: AppStyle.countPixelRatio(20.3),
    paddingRight: AppStyle.countPixelRatio(13.3),
  },
});
