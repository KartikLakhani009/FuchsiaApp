import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//component
import TextFunc from '../TextAuthFunc';

//lib
import validate from '../../lib/validation';
import api from '../../lib/API/index';

import {USERSTORE, LOGINUSER} from '../../statics/GlobalStatics';

//styles
import styles from '../../Config/commanStyle';

class LoginForm extends Component {
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
  render() {
    const {handleSubmit} = this.props;
    return (
      <View>
        <Field
          name="Email"
          refField={ref => (this['Email'] = ref)}
          placeholder="Email"
          onSubmitEdit={event => {
            this['Password'].focus();
          }}
          autoCapitalize={false}
          returnKeyType={'next'}
          secureTextEntry={false}
          component={TextFunc}
        />
        <Field
          name="Password"
          refField={ref => (this['Password'] = ref)}
          placeholder="Password"
          secureTextEntry={true}
          component={TextFunc}
        />
        <TouchableOpacity
          style={[styles.btnSubmit, {marginTop: '5%'}]}
          onPress={handleSubmit(this.LoginAction)}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
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
