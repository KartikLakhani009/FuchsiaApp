import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';

//component
import LoginForm from '../../component/UserAuth/Login-Form';
import Loader from '../../component/LoderModel/Loader';
import ThirdParty from '../../component/ThirdPartySigin/ThirdParty';

import withloader from '../../hoc/withloader';

//styles
import commonstyles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

import {AppImages} from '../../Images/index';

import {USERSTORE} from '../../statics/GlobalStatics';

//APPName do it later
import app_Details from '../../../app.json';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {LoaderValue, LoaderFired} = this.props;
    if (LoaderValue == true) {
      LoaderFired(false);
    }
  }

  render() {
    const {navigation, LoaderValue} = this.props;
    return (
      <View style={styles.container}>
        <Loader loaderShow={LoaderValue} />
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={AppImages.BackLogo} style={styles.BackLogo} />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView style={{flex: 1}} behavior={'height'}>
          <ScrollView style={{flex: 1}}>
            <Text style={[commonstyles.Title, {}]}>Login</Text>
            <Text style={styles.SubTitle}>
              Login to join the DigiEvent platform.
            </Text>
            <LoginForm {...this.props} />

            {/* <View style={{marginTop: '5%'}}>
              <TouchableOpacity
                style={[commonstyles.btnSubmit]}
                onPress={() => {
                  navigate('RegisterScreen');
                }}>
                <Text style={commonstyles.btnText}>Registration</Text>
              </TouchableOpacity>
            </View> */}
            {/* <View style={{marginTop: '5%'}}>
              <TouchableOpacity
                style={{
                  minWidth: 150,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#2AC062',
                  display: 'flex',
                  borderRadius: 5,
                  shadowColor: '#2AC062',
                  shadowOpacity: 0.4,
                  shadowRadius: 20,
                  shadowOffset: {height: 10, width: 5},
                }}
                onPress={() => {
                  navigate('UserListScreen');
                }}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                  Bypass
                </Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.ThirdParty}>
              <ThirdParty />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export default withloader(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: AppStyle.countPixelRatio(23),
    // borderStartColor: '#ffffff',
  },
  BackLogo: {
    marginTop: AppStyle.countPixelRatio(25),
    height: AppStyle.countPixelRatio(20),
    width: AppStyle.countPixelRatio(12),
  },
  SubTitle: {
    fontSize: AppStyle.fontSizeH4,
    color: AppStyle.COLOR.slateGrey,
    marginBottom: '15%',
  },

  ThirdParty: {
    // bottom: AppStyle.countPixelRatio(0),
    // position: 'absolute',
    // marginTop: '55%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // flex: 1,
  },
});
