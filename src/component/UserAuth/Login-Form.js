import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//component
import TextFunc from './TextAuthFunc';
import CustomButton from '../CustButton';

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
    let data = {
      email: values.Email.trim().toLowerCase(),
      password: values.Password,
    };

    let res = await api(LOGINUSER, data, 'post', null);
    if (res.title == 'error') {
      alert('invalid access');
    } else {
      data.token = res.json.token;
      await AsyncStorage.setItem(USERSTORE, JSON.stringify(data))
        .then(res => this.props.navigation.navigate('UserListScreen'))
        .catch(err => {
          alert('There is Aysn Problem : try again');
          console.log('Login-Form  Async Error :  ', err);
          return err;
        });
    }
  };

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  render() {
    const {handleSubmit} = this.props;
    return (
      <View style={{flex: 1}}>
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
          <CustomButton
            label={'Have invitation code?'}
            lableStyle={styles.codestyle}
          />
        </View>

        <LinearGradient
          colors={AppStyle.blueLinearGradinent}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.btnSubmit}>
          <CustomButton
            label={'Login'}
            lableStyle={styles.btnText}
            buttonStyle={{width: '100%', alignItems: 'center'}}
            btnAction={handleSubmit(this.LoginAction)}
          />
        </LinearGradient>

        <View style={styles.forgetView}>
          <Text style={styles.forgetText}>Forgotten your login details?</Text>
          <CustomButton
            label={' Get help login'}
            lableStyle={styles.forgetLink}
          />
        </View>
      </View>
    );
  }
}

withForm = reduxForm({
  form: 'Login',
  validate,
});

mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps, null)(withForm(LoginForm));
