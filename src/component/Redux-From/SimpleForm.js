import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Picker} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import myField from './myField';
import {connect} from 'react-redux';
import DropDownList from './DropDownMenu';

const initialvalues = {
  FName: 'Avan',
  PhNo: '4512631',
};

const validate = values => {
  const errors = {};

  var ph = values.PhNo;

  var fname = values.FName;

  if (ph === undefined) {
    ph = '';
  }

  if (fname === undefined) {
    fname = '';
  }

  if (fname == '') {
    errors.FName = 'Please Fill The Values for First Name';
  }

  if (ph == '') {
    errors.PhNo = 'Please Fill The Values for First Name';
  }
  //   else if (values.FName.length > 8) {
  //     errors.FName = 'Too short';
  //   }

  if (isNaN(ph)) {
    errors.PhNo = 'Must be a number ';
  }
  if (ph.length > 10) {
    errors.PhNo = 'Maximun allow 10 numbers';
  }
  //   if (values.FName.length < 8 && values.FName != '') errors.FName = 'Too Long';

  return errors;
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);
  }

  myAction = values => {
    console.log('values', values);
    // console.log('this props navigatio n :   ', this.props.navigation);
    // if (values.FNamev != '' && !values.PhNo != '') {
    // this.props.navigation.navigate('WelcomeHello');
    // }
    // alert('This is pure demo purpose : ');
  };

  render() {
    // console.log('SimpleForm Props :', this.props);
    const {handleSubmit} = this.props;
    return (
      <View style={styles.container}>
        {/* <Text>SimpleForm</Text> */}
        <Field
          name="FName"
          refField={ref => (this['FName'] = ref)}
          placeholder="First Name"
          component={myField}
        />
        <Field
          name="PhNo"
          refField={ref => (this['PhNo'] = ref)}
          placeholder="Phone No."
          component={myField}
        />
        <Field name="country" component={DropDownList}>
          <Picker.Item label="India" value="India" />
          <Picker.Item label="US" value="united State" />
          <Picker.Item label="UK" value="united kingdom" />
        </Field>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={handleSubmit(this.myAction)}
          // onPress={handler("Hello")}}
        >
          <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Ok
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const withForm = reduxForm({
  form: 'Simple',
  // enableReinitialize: true,
  validate,
  onSubmitSuccess: (result, dispatch, props) => {
    return props.navigation.navigate('WelcomeHello');
  },
  initialValues: initialvalues,
});

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(mapStateToProps, null)(withForm(SimpleForm));

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    // backgroundColor: 'blue',
  },
  btnStyle: {
    marginTop: 80,
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
  },
});
