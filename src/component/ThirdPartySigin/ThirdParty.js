import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import AppStyle from '../../Config/AppStyle';

import {AppImages} from '../../Images/index';

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
          <LinearGradient
            style={[
              styles.BtnCommon,
              {backgroundColor: AppStyle.COLOR.FACEBOOK_BLUE, marginLeft: 0},
            ]}
            colors={AppStyle.FBLinearGradinent}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity
              onPress={() => {
                alert('button pressed');
              }}>
              <Image
                source={AppImages.FBLogo}
                style={[
                  styles.imgCommon,
                  {
                    height: AppStyle.responsiveHeight(3),
                    width: AppStyle.responsiveWidth(3),
                    resizeMode: 'cover',
                  },
                ]}
              />
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={[styles.BtnCommon, {backgroundColor: AppStyle.COLOR.azure}]}
            colors={AppStyle.TwitterLinearGradinent}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity
              onPress={() => {
                alert('button pressed');
              }}>
              <Image
                source={AppImages.TwiterLogo}
                style={[
                  styles.imgCommon,
                  {
                    height: AppStyle.responsiveHeight(3),
                    width: AppStyle.responsiveWidth(7),
                    resizeMode: 'cover',
                  },
                ]}
              />
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={[
              styles.BtnCommon,
              {
                backgroundColor: AppStyle.COLOR.GOOGLE_CINABAR,
                marginRight: 0,
              },
            ]}
            colors={AppStyle.GPlusLinearGradinent}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity
              onPress={() => {
                alert('button pressed');
              }}>
              <Image
                source={AppImages.GPlusLogo}
                style={[
                  styles.imgCommon,
                  {
                    height: AppStyle.responsiveHeight(3),
                    width: AppStyle.responsiveWidth(5),
                    //   resizeMode: 'cover',
                  },
                ]}
              />
            </TouchableOpacity>
          </LinearGradient>
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
