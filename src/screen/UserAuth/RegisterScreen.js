import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

//component
import RegisterFrom from '../../component/UserAuth/Register-Form';

//styles
import commonstyles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={[
            commonstyles.header,
            {marginTop: '10%', marginBottom: '10%'},
          ]}>
          Fuchsia
        </Text>
        <KeyboardAvoidingView behavior={'padding'}>
          <ScrollView>
            <Text
              style={[
                commonstyles.Title,
                {color: AppStyle.COLOR.darkIndigo, fontWeight: 'bold'},
              ]}>
              Register
            </Text>
            <Text style={styles.SubTitle}>Join our event platform.</Text>
            <RegisterFrom />
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
    marginHorizontal: '10%',
  },
  SubTitle: {
    fontSize: AppStyle.fontSizeH4,
    color: AppStyle.COLOR.slateGrey,
    marginBottom: '10%',
  },
});
