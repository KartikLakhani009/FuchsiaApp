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
import ThirdParty from '../../component/ThirdPartySigin/ThirdParty';
import withloader from '../../hoc/withloader';
import BackButton from '../../component/BackButton';

//styles
import commonstyles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

import {AppImages} from '../../Images/index';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View>
          <BackButton navigation={navigation} />
        </View>
        <KeyboardAvoidingView style={{flex: 1}} behavior={'height'}>
          <ScrollView style={{flex: 1}}>
            <Text style={commonstyles.title}>Login</Text>
            <Text style={[commonstyles.subTitle, styles.subTitle]}>
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
    marginHorizontal: AppStyle.countPixelRatio(23),
  },
  subTitle: {
    marginBottom: '18%',

    marginTop: AppStyle.countPixelRatio(5),
  },
  thirdPartyStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
