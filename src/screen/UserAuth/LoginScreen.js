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
            <Image source={AppImages.BackLogo} style={styles.backLogo} />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView style={{flex: 1}} behavior={'height'}>
          <ScrollView style={{flex: 1}}>
            <Text style={[commonstyles.title, {}]}>Login</Text>
            <Text style={styles.SubTitle}>
              Login to join the DigiEvent platform.
            </Text>
            <LoginForm {...this.props} />
            <View style={styles.thirdPartyStyle}>
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
  backLogo: {
    marginTop: AppStyle.countPixelRatio(25),
    height: AppStyle.countPixelRatio(20),
    width: AppStyle.countPixelRatio(12),
  },
  SubTitle: {
    fontSize: AppStyle.fontSizeH4,
    color: AppStyle.COLOR.slateGrey,
    marginBottom: '15%',
  },

  thirdPartyStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
