import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//component
import TextFunc from '../TextAuthFunc';

//styles
import styles from '../../Config/commanStyle';

class RegisterFrom extends Component {
  render() {
    const {} = this.props;
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
          style={styles.btnSubmit}
          onPress={() => {
            alert('button pressed');
          }}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

withForm = reduxForm({
  form: 'Login',
  // enableReinitialize: true,
  //   validate,
  //   onSubmitSuccess: (result, dispatch, props) => {
  //     return props.navigation.navigate('WelcomeT');
  //   },
});

mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps, null)(withForm(RegisterFrom));
