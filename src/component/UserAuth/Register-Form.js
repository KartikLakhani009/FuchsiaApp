import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Picker, Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//component
import TextFunc from './TextAuthFunc';
import DropDownList from './DropDownMenu';
import CustomButton from '../CustButton';

//lib
import validate from '../../lib/validation';
import api from '../../lib/API/index';

import {REGISTERUSER, USERSTORE} from '../../statics/GlobalStatics';

//styles
import styles from '../../Config/commanStyle';
import AppStyle from '../../Config/AppStyle';
import {AppImages} from '../../Images';

class RegisterFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {hidePassword: true};
  }

  Register = async values => {
    let data = {
      email: values.Email.trim().toLowerCase(),
      password: values.Password,
    };
    let res = await api(REGISTERUSER, data, 'post', null);

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
          console.log('Reguster-Form Asycn Error : ', error);
          return error;
        });
    }
  };

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  getPickerValue = (itemValue, itemIndex) => {
    console.log('Picker Value  : ', itemValue, ' Index :', itemIndex);
  };

  render() {
    const {handleSubmit, navigation} = this.props;
    return (
      <View>
        <Field
          name="FirstName"
          refField={ref => (this['FirstName'] = ref)}
          placeholder="First Name"
          secureTextEntry={false}
          onSubmitEdit={event => {
            this['LastName'].focus();
          }}
          returnKeyType={'next'}
          component={TextFunc}
        />
        <Field
          name="LastName"
          refField={ref => (this['LastName'] = ref)}
          placeholder="Last Name"
          secureTextEntry={false}
          onSubmitEdit={event => {
            this['Phone'].focus();
          }}
          returnKeyType={'next'}
          component={TextFunc}
        />

        <Field
          name="Phone"
          refField={ref => (this['Phone'] = ref)}
          placeholder="Phone"
          secureTextEntry={false}
          onSubmitEdit={event => {
            this['Email'].focus();
          }}
          returnKeyType={'next'}
          onChangeItem={this.getPickerValue}
          component={DropDownList}>
          <Picker.Item label="IND" value="India" />
          <Picker.Item
            label="US"
            value="united State"
            children={
              <Image
                source={AppImages.AmericanFlag}
                style={{height: 50, width: 50}}
              />
            }
          />
          <Picker.Item label="UK" value="united kingdom" />
        </Field>

        <Field
          name="Email"
          refField={ref => (this['Email'] = ref)}
          placeholder="Email"
          secureTextEntry={false}
          onSubmitEdit={event => {
            this['Password'].focus();
          }}
          returnKeyType={'next'}
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
        <LinearGradient
          colors={AppStyle.blueLinearGradinent}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.btnSubmit}>
          <CustomButton
            label={'Register'}
            lableStyle={styles.btnText}
            buttonStyle={{width: '100%', alignItems: 'center'}}
            btnAction={handleSubmit(this.Register)}
          />
        </LinearGradient>
        <View style={[styles.forgetView, {}]}>
          <Text style={styles.forgetText}>
            If you have already have Registered?
          </Text>
          <CustomButton
            label={' Login'}
            lableStyle={styles.forgetLink}
            btnAction={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
    );
  }
}

withForm = reduxForm({
  form: 'Register',
  validate: validate,
});

mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps, null)(withForm(RegisterFrom));
