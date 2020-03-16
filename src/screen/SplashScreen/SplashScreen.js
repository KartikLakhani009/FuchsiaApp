import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {AppImages} from '../../Images/index';

//styles
import commonstyles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

import {USERSTORE} from '../../statics/GlobalStatics';

class SplashScreen extends Component {
  performTimeConsumingTask = async () => {
    var i = 1;
    return new Promise(resolve =>
      setTimeout(() => {
        console.log('Sec : ', i++);
        resolve('result');
      }, 300),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    // demo = async ()=>{
    const data = await this.performTimeConsumingTask();

    console.log('executive now :');

    if (data !== null) {
      let result = await AsyncStorage.getItem(USERSTORE)
        .then(res => {
          // console.log('Login Screen ->res : ', res);
          if (res != null) {
            user = JSON.parse(res);
            // console.log('User  :', user);
            return this.props.navigation.navigate('UserListScreen', {
              userInfo: user,
            });
          } else {
            return 'err';
          }
        })
        .catch(err => {
          console.log('err : ', err);
          return 'err';
        });

      //   console.log('Result :  ', result);
      if (result == 'err') {
        this.props.navigation.navigate('LoginScreen');
      }
    }
  }

  render() {
    console.log('Start now : ');
    // console.log('Navigation Stack  : ', this.props.navigation);
    return (
      <View>
        <ImageBackground
          source={AppImages.SplashScreen}
          style={{width: '100%', height: '100%'}}>
          <Text style={styles.APPNAME}>Fuchsia</Text>
        </ImageBackground>
      </View>
    );
  }
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  APPNAME: {
    fontSize: 48,
    color: AppStyle.COLOR.WHITE_OFF,
    marginHorizontal: '10%',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
  },
});
