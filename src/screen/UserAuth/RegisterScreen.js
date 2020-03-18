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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={AppImages.BackLogo} style={styles.BackLogo} />
              </TouchableOpacity>
            </View>
            <Text style={[commonstyles.Title, {}]}>Register</Text>
            <Text style={styles.SubTitle}>Join our event platform.</Text>
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
  SubTitle: {
    fontSize: AppStyle.fontSizeH4,
    color: AppStyle.COLOR.slateGrey,
    marginBottom: AppStyle.countPixelRatio(35.5),
  },
  BackLogo: {
    marginTop: AppStyle.countPixelRatio(25),
    height: AppStyle.countPixelRatio(20),
    width: AppStyle.countPixelRatio(12),
  },
});
