import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
        <Text
          style={[
            commonstyles.Title,
            {color: AppStyle.COLOR.darkIndigo, fontWeight: 'bold'},
          ]}>
          Login
        </Text>
        <Text style={styles.SubTitle}>Login to join the Fuchsia platform.</Text>
        <LoginForm {...this.props} />
        <TouchableOpacity
          style={[
            commonstyles.btnSubmit,
            {marginTop: '5%', justifyContent: 'center', alignSelf: 'center'},
          ]}
          onPress={() => {
            navigate('RegisterScreen');
          }}>
          <Text style={commonstyles.btnText}>Registration</Text>
        </TouchableOpacity>
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
