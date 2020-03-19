import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import AppStyle from '../../Config/AppStyle';

import {AppImages} from '../../Images/index';

import ImageButton from '../ImageButton';

class ThirdParty extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            marginBottom: AppStyle.countPixelRatio(1),
          }}>
          <Text style={styles.lblText}>Continue With</Text>
        </View>
        <View style={styles.BtnView}>
          <ImageButton
            lgstyle={[
              styles.BtnCommon,
              {
                marginLeft: 0,
              },
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            source={AppImages.FBLogo}
            imageStyle={[
              styles.imgCommon,
              {
                height: AppStyle.responsiveHeight(3),
                width: AppStyle.responsiveWidth(3),
                resizeMode: 'cover',
              },
            ]}
            colors={AppStyle.FBLinearGradinent}
          />
          <ImageButton
            lgstyle={styles.BtnCommon}
            colors={AppStyle.TwitterLinearGradinent}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            source={AppImages.TwiterLogo}
            imageStyle={[
              styles.imgCommon,
              {
                height: AppStyle.responsiveHeight(3),
                width: AppStyle.responsiveWidth(7),
                resizeMode: 'cover',
              },
            ]}
          />

          <ImageButton
            lgstyle={[
              styles.BtnCommon,
              {
                marginRight: 0,
              },
            ]}
            colors={AppStyle.GPlusLinearGradinent}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            source={AppImages.GPlusLogo}
            imageStyle={[
              styles.imgCommon,
              {
                height: AppStyle.responsiveHeight(3),
                width: AppStyle.responsiveWidth(5),
              },
            ]}
          />
        </View>
      </View>
    );
  }
}
export default ThirdParty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: AppStyle.countPixelRatio(60),
  },
  lblText: {
    color: AppStyle.COLOR.slateGrey,
    fontSize: AppStyle.fontSizeParagraph,
    marginRight: '2.5%',
    fontFamily: AppStyle.fontSemiBold,
  },
  BtnView: {
    flexDirection: 'row',
    marginTop: AppStyle.countPixelRatio(23.3),
  },
  BtnCommon: {
    width: AppStyle.countPixelRatio(94),
    height: AppStyle.countPixelRatio(51.3),
    marginRight: AppStyle.countPixelRatio(14),
    marginLeft: AppStyle.countPixelRatio(14),
    borderRadius: AppStyle.countPixelRatio(6),
  },
  imgCommon: {
    alignSelf: 'center',
    marginTop: AppStyle.countPixelRatio(15),
    resizeMode: 'stretch',
  },
});
