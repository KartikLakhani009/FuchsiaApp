import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//component
import TextFunc from './TextAuthFunc';

//lib
import validate from '../../lib/validation';
import api from '../../lib/API/index';

import {REGISTERUSER, USERSTORE} from '../../statics/GlobalStatics';

//styles
import styles from '../../Config/commanStyle';

class RegisterFrom extends Component {
  constructor(props) {
    super(props);
  }

  Register = async values => {
    // console.log('values :', values);
    let data = {
      email: values.Email.trim().toLowerCase(),
      password: values.Password,
    };
    let res = await api(REGISTERUSER, data, 'post', null);

    // console.log('Register-From :  res For API : ', res);

    if (res.title == 'error') {
      alert('Registration error (form token)');
    } else {
      data.token = res.json.token;
      await AsyncStorage.setItem(USERSTORE, JSON.stringify(data))
        .then(res => {
          return this.props.navigation.navigate('UserListScreen');
        })
        .catch(error => {
          alert('There is Async Problem');
          console.error('Reguster-Form Asycn Error : ', error);
          return error;
        });
    }
  };
  render() {
    // console.log('Register-From : props : ', this.props);

    const {handleSubmit} = this.props;
    return (
      <View>
        <Field
          name="FirstName"
          refField={ref => (this['FirstName'] = ref)}
          placeholder="FirstName"
          secureTextEntry={false}
          onSubmitEdit={event => {
            this['LastName'].focus();
          }}
          autoCapitalize={false}
          returnKeyType={'next'}
          component={TextFunc}
        />
        <Field
          name="LastName"
          refField={ref => (this['LastName'] = ref)}
          placeholder="LastName"
          secureTextEntry={false}
          onSubmitEdit={event => {
            this['Email'].focus();
          }}
          autoCapitalize={false}
          returnKeyType={'next'}
          component={TextFunc}
        />
        <Field
          name="Email"
          refField={ref => (this['Email'] = ref)}
          placeholder="Email"
          secureTextEntry={false}
          onSubmitEdit={event => {
            this['Password'].focus();
          }}
          autoCapitalize={false}
          returnKeyType={'next'}
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
          onPress={handleSubmit(this.Register)}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

withForm = reduxForm({
  form: 'Register',
  // enableReinitialize: true,
  validate: validate,
  // onSubmitSuccess: (result, dispatch, props) => {
  //   return props.navigation.navigate('WelcomeT');
  // },
});

mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps, null)(withForm(RegisterFrom));
