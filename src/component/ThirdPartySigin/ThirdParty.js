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
                    height: AppStyle.responsiveHeight(3.6),
                    width: AppStyle.responsiveWidth(3.6),
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
                    height: AppStyle.responsiveHeight(3.6),
                    width: AppStyle.responsiveWidth(8),
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
                    height: AppStyle.responsiveHeight(3.6),
                    width: AppStyle.responsiveWidth(5.5),
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
    // justifyContent: 'flex-end',
    // backgroundColor: 'red',
    // bottom: 0,
    // position: 'absolute',
    marginTop: AppStyle.countPixelRatio(70),
  },

  lblText: {
    color: AppStyle.COLOR.slateGrey,
    fontSize: AppStyle.fontSizeParagraph,
    marginRight: '2.5%',
  },
  BtnView: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: AppStyle.countPixelRatio(23.3),
  },
  BtnCommon: {
    width: AppStyle.responsiveWidth(25),
    height: AppStyle.responsiveHeight(8.3),
    // backgroundColor: 'red',
    // alignSelf: 'center',
    // borderWidth: 1,
    marginRight: AppStyle.countPixelRatio(12),
    marginLeft: AppStyle.countPixelRatio(12),
    borderRadius: AppStyle.countPixelRatio(6),
  },
  imgCommon: {
    alignSelf: 'center',
    marginTop: AppStyle.countPixelRatio(15),
    resizeMode: 'stretch',
  },
});
