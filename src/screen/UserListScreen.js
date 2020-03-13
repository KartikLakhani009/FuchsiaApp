import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//styles
import commonstyles from '../Config/commanStyle';
import AppStyle from '../Config/AppStyle';

class UserListScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>User List</Text>
        </View>
        <View style={styles.container}>
          <Text>hello</Text>
        </View>
      </View>
    );
  }
}
export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '10%',
    marginTop: '2%',
  },
  header: {
    backgroundColor: AppStyle.COLOR.windowsBlue,
    height: '30%',
    justifyContent: 'center',
  },
  headerText: {
    marginHorizontal: '5%',
    fontSize: AppStyle.fontSizeH3,
    color: 'white',
  },
});
