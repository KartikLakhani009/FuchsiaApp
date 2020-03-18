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
            style={styles.PassVisibleStyleView}
            onPress={VisiblityAction}>
            <Image
              source={AppImages.PassVisible}
              style={styles.PassVisibleStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      {/* <Text style={styles.error}>
        {touched && error ? '* ' + {error} : null}
      </Text> */}
      {touched && error && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
};
export default TextFunc;

const styles = StyleSheet.create({
  inputView: {
    marginTop: AppStyle.countPixelRatio(10),
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    height: AppStyle.responsiveHeight(6),
    width: '100%',
    borderWidth: 1,
    borderColor: AppStyle.COLOR.Zumthor,
    borderRadius: AppStyle.countPixelRatio(5),
    backgroundColor: '#f9f9f9',
    marginBottom: AppStyle.countPixelRatio(10),
    fontSize: AppStyle.fontSizeParagraph,
  },
  label: {
    color: AppStyle.COLOR.slateGrey,
    fontSize: AppStyle.fontSizeParagraph,
    // marginTop: '2%',
  },
  error: {
    // margin: '1%',
    // marginBottom: '1.5%',
    color: AppStyle.COLOR.RED,
    fontSize: AppStyle.fontSizeH4_5,
  },
  PassVisibleStyle: {
    height: 15,
    width: 25,
    resizeMode: 'stretch',
  },
  PassVisibleStyleView: {
    right: '0%',
    position: 'absolute',
    // alignSelf: 'center',
    paddingTop: AppStyle.countPixelRatio(13.3),
    paddingRight: AppStyle.countPixelRatio(13.3),
    // backgroundColor: 'red',
  },
});
