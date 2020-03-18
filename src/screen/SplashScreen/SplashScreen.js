import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {AppImages} from '../../Images/index';

//styles
import commonstyles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

import {USERSTORE} from '../../statics/GlobalStatics';

class SplashScreen extends Component {
  async componentDidMount() {
    await AsyncStorage.getItem(USERSTORE)
      .then(res => {
        if (res != null) {
          user = JSON.parse(res);
          return this.props.navigation.navigate('UserListScreen', {
            userInfo: user,
          });
        }
      })
      .catch(err => {
        console.log('err : ', err);
        return 'err';
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={AppImages.SplashScreen}
          resizeMode={'stretch'}
          style={styles.appBkg}>
          <View style={{flex: 1}}>
            <Image source={AppImages.SplashLogo} style={styles.appLogo} />
            <View style={styles.viewRegister}>
              <TouchableOpacity
                style={styles.btnRegister}
                onPress={() => navigate('RegisterScreen')}>
                <Text style={styles.textRegister}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginView}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigate('LoginScreen')}>
                <Text style={styles.loginLink}>{' Login'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewRegister: {
    left: AppStyle.countPixelRatio(25),
    marginTop: AppStyle.countPixelRatio(120),
  },
  btnRegister: {
    backgroundColor: '#fff',
    width: AppStyle.countPixelRatio(160),
    height: AppStyle.countPixelRatio(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: AppStyle.countPixelRatio(6),
  },
  textRegister: {
    color: AppStyle.COLOR.windowsBlue,
    textAlign: 'center',
    fontSize: AppStyle.fontSizeParagraph,
    fontFamily: AppStyle.fontSemiBold,
  },
  appBkg: {
    flex: 1,
    width: AppStyle.width,
    height: AppStyle.height,
    resizeMode: 'cover',
  },
  appLogo: {
    top: AppStyle.countPixelRatio(70),
    left: AppStyle.countPixelRatio(25),
    height: AppStyle.countPixelRatio(86),
    width: AppStyle.countPixelRatio(280),
    resizeMode: 'stretch',
  },
  loginView: {
    alignItems: 'flex-end',
    bottom: AppStyle.countPixelRatio(60),
    position: 'absolute',
    flexDirection: 'row',
    left: AppStyle.countPixelRatio(25),
  },
  loginText: {
    color: AppStyle.COLOR.coolGrey,
    fontSize: AppStyle.fontSizeParagraph,
    fontFamily: AppStyle.fontSemiBold,
  },
  loginLink: {
    color: AppStyle.COLOR.windowsBlue,
    fontWeight: 'bold',
    fontSize: AppStyle.fontSizeParagraph,
    fontFamily: AppStyle.fontExtraBold,
  },
});
