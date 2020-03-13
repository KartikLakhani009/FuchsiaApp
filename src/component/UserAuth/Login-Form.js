import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//component
import TextFunc from '../TextAuthFunc';

//lib
import validate from '../../lib/validation';
import loginUser from '../../lib/API/methods/loginUser';

//styles
import styles from '../../Config/commanStyle';

class LoginForm extends Component {
  LoginAction = async values => {
    console.log(' LoGin Action Values : ', values);
    // alert('Working');
    let res = await loginUser(
      values.Email.trim().toLowerCase(),
      values.Password,
    );
    console.log('res Datat from loginform :  ', res);
    if (!res.token) {
      alert('error invalid access');
    } else {
      alert('Token ', res.token);
      return this.props.navigation.navigate('UserListScreen');
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
  // onSubmitSuccess: (result, dispatch, props) => {
  //   return props.navigation.navigate('WelcomeT');
  // },
});

mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps, null)(withForm(LoginForm));
