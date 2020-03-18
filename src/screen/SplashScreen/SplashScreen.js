import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {AppImages} from '../../Images/index';

//styles
import commonstyles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

import {USERSTORE} from '../../statics/GlobalStatics';

class SplashScreen extends Component {
  async componentDidMount() {
    console.log('executive now :');

    // await AsyncStorage.clear();

    await AsyncStorage.getItem(USERSTORE)
      .then(res => {
        // console.log('Login Screen ->res : ', res);
        if (res != null) {
          user = JSON.parse(res);
          // console.log('User  :', user);
          return this.props.navigation.navigate('UserListScreen', {
            userInfo: user,
          });
        }
      })
      .catch(err => {
        console.log('err : ', err);
        return 'err';
      });

    //   console.log('Result :  ', result);
  }

  render() {
    const {
      navigation: {navigate},
    } = this.props;
    console.log('Start now : ');
    // console.log('Navigation Stack  : ', this.props.navigation);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={AppImages.SplashScreen}
          resizeMode={'stretch'}
          style={styles.APPBKG}>
          <View style={{flex: 1}}>
            <Image source={AppImages.SplashLogo} style={styles.APPLOGO} />
            {/* <Text style={styles.APPNAME}>Fuchsia</Text> */}
            <View style={styles.ViewRegister}>
              <TouchableOpacity
                style={styles.btnRegister}
                onPress={() => navigate('RegisterScreen')}>
                <Text style={styles.TextRegister}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.LoginView}>
              <Text style={styles.LoginText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigate('LoginScreen')}>
                <Text
                  style={{
                    color: AppStyle.COLOR.windowsBlue,
                    fontWeight: 'bold',
                    fontSize: AppStyle.fontSizeParagraph,
                  }}>
                  {' Login'}
                </Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  APPNAME: {
    fontSize: 48,
    color: AppStyle.COLOR.WHITE_OFF,
    marginHorizontal: '10%',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
  },
  ViewRegister: {
    left: AppStyle.countPixelRatio(25),
    marginTop: AppStyle.countPixelRatio(120),
  },
  btnRegister: {
    backgroundColor: '#fff',
    width: AppStyle.responsiveWidth(40),
    height: AppStyle.responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  TextRegister: {
    color: AppStyle.COLOR.windowsBlue,
    textAlign: 'center',
    fontSize: AppStyle.fontSizeParagraph,
  },
  APPBKG: {
    flex: 1,
    width: AppStyle.width,
    height: '100%',
    resizeMode: 'cover',
  },
  APPLOGO: {
    top: AppStyle.countPixelRatio(70),
    left: AppStyle.countPixelRatio(25),
    height: AppStyle.countPixelRatio(86),
    width: AppStyle.countPixelRatio(280),
    resizeMode: 'stretch',
  },
  LoginView: {
    // marginBottom: AppStyle.countPixelRatio(74),
    alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    // backgroundColor: 'red',
    bottom: AppStyle.countPixelRatio(60),
    position: 'absolute',
    flexDirection: 'row',
    left: AppStyle.countPixelRatio(25),
  },
  LoginText: {
    color: AppStyle.COLOR.coolGrey,
    fontSize: AppStyle.fontSizeParagraph,
  },
});
