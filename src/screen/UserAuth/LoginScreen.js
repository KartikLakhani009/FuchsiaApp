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
import LoginForm from '../../component/UserAuth/Login-Form';

//styles
import commonstyles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

//APPName do it later
import app_Details from '../../../app.json';

class LoginScreen extends Component {
  render() {
    const {
      navigation: {navigate},
    } = this.props;
    return (
      <View style={styles.container}>
        <Text
          style={[
            commonstyles.header,
            {marginTop: '10%', marginBottom: '10%'},
          ]}>
          Fuchsia
        </Text>
        <KeyboardAvoidingView behavior={'height'}>
          <ScrollView>
            <Text
              style={[
                commonstyles.Title,
                {color: AppStyle.COLOR.darkIndigo, fontWeight: 'bold'},
              ]}>
              Login
            </Text>
            <Text style={styles.SubTitle}>
              Login to join the Fuchsia platform.
            </Text>
            <LoginForm {...this.props} />
            <View style={{marginTop: '5%'}}>
              <TouchableOpacity
                style={[commonstyles.btnSubmit]}
                onPress={() => {
                  navigate('RegisterScreen');
                }}>
                <Text style={commonstyles.btnText}>Registration</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: '5%'}}>
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
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: '10%',
    // borderStartColor: '#ffffff',
  },
  SubTitle: {
    fontSize: AppStyle.fontSizeH4,
    color: AppStyle.COLOR.slateGrey,
    marginBottom: '15%',
  },
});
