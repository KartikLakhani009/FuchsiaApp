import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class WelcomeT extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomeT</Text>
      </View>
    );
  }
}
export default WelcomeT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
