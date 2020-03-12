import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//component
import TextFunc from '../TextAuthFunc';

//lib
import validate from '../../lib/validation';

//styles
import styles from '../../Config/commanStyle';

class RegisterFrom extends Component {
  constructor(props) {
    super(props);
  }

  Register = values => {
    console.log('values :', values);
    alert('Working');
    // return this.props.navigation.navigate('WelcomeT');
  };
  render() {
    const {handleSubmit} = this.props;
    return (
      <View>
        <Field
          name="FirstName"
          refField={ref => (this['FirstName'] = ref)}
          placeholder="FirstName"
          secureTextEntry={false}
          component={TextFunc}
        />
        <Field
          name="LastName"
          refField={ref => (this['LastName'] = ref)}
          placeholder="LastName"
          secureTextEntry={false}
          component={TextFunc}
        />
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
  onSubmitSuccess: (result, dispatch, props) => {
    return props.navigation.navigate('WelcomeT');
  },
});

mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps, null)(withForm(RegisterFrom));
