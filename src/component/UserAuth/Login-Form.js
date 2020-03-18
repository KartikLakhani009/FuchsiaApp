import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//component
import TextFunc from './TextAuthFunc';

//lib
import validate from '../../lib/validation';
import api from '../../lib/API/index';

import {USERSTORE, LOGINUSER} from '../../statics/GlobalStatics';

//styles
import styles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {hidePassword: true};
  }

  LoginAction = async values => {
    // console.log(' LoGin Action Values : ', values);
    let data = {
      email: values.Email.trim().toLowerCase(),
      password: values.Password,
    };
    let res = await api(LOGINUSER, data, 'post', null);
    if (res.title == 'error') {
      alert('invalid access');
    } else {
      data.token = res.json.token;
      // console.log('Final Store Data : ', data);
      await AsyncStorage.setItem(USERSTORE, JSON.stringify(data))
        .then(res => this.props.navigation.navigate('UserListScreen'))
        .catch(err => {
          alert('There is Aysn Problem : try again');
          console.error('Login-Form  Async Error :  ', err);
          return err;
        });
    }
  };

  setPasswordVisibility = () => {
    console.log('before setPasswordVisibility : ', this.state.hidePassword);
    this.setState({hidePassword: !this.state.hidePassword});
    console.log('after setPasswordVisibility : ', this.state.hidePassword);
  };

  render() {
    console.log('Password visiblity status : ', this.state.hidePassword);
    const {handleSubmit} = this.props;
    return (
      <View style={{flex: 1, marginTop: '4%'}}>
        <Field
          name="Email"
          refField={ref => (this['Email'] = ref)}
          placeholder="Email"
          onSubmitEdit={event => {
            this['Password'].focus();
          }}
          returnKeyType={'next'}
          secureTextEntry={false}
          component={TextFunc}
        />
        <Field
          name="Password"
          refField={ref => (this['Password'] = ref)}
          placeholder="Password"
          secureTextEntry={this.state.hidePassword}
          VisiblityAction={this.setPasswordVisibility}
          TextVisible={true}
          component={TextFunc}
        />
        <View style={styles.codestyleView}>
          <TouchableOpacity>
            <Text style={styles.codestyle}>Have invitation code?</Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={AppStyle.blueLinearGradinent}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.btnSubmit}>
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center'}}
            onPress={handleSubmit(this.LoginAction)}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.ForgetView}>
          <Text style={styles.ForgetText}>Forgotten your login details?</Text>
          <TouchableOpacity
            onPress={() => {
              alert('button pressed');
            }}>
            <Text style={styles.ForgetLink}> Get help login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

withForm = reduxForm({
  form: 'Login',
  // enableReinitialize: true,
  validate,
});

mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps, null)(withForm(LoginForm));
