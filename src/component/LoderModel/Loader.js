import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, ActivityIndicator} from 'react-native';

class Loader extends Component {
  render() {
    const {loaderShow} = this.props;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={loaderShow}
        onRequestClose={() => console.log('modal close event')}>
        <View style={styles.modal}>
          <ActivityIndicator
            style={styles.LoaderActivity}
            size={'large'}
            color="red"
          />
          <Text style={styles.LoaderText}>Loading ...</Text>
        </View>
      </Modal>
    );
  }
}
export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    width: '40%',
    height: '20%',
    top: '35%',
    left: '28%',
    // marginTop: '40%',
  },
  LoaderActivity: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  LoaderText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});
