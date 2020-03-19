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
import RegisterFrom from '../../component/UserAuth/Register-Form';
import BackButton from '../../component/BackButton';

//styles
import commonstyles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

import {AppImages} from '../../Images/index';

class RegisterScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={'height'}>
          <ScrollView>
            <View>
              <BackButton navigation={navigation} />
            </View>
            <Text style={commonstyles.title}>Register</Text>
            <Text style={[commonstyles.subTitle, styles.subTitle]}>
              Join our event platform.
            </Text>
            <RegisterFrom {...this.props} />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: AppStyle.countPixelRatio(23),
  },
  subTitle: {
    marginBottom: AppStyle.countPixelRatio(20),
  },
});
