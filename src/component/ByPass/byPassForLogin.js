import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoginByPass = props => {
  if (props.visible == true) {
    return (
      <View style={{marginTop: '5%'}}>
        <TouchableOpacity
          style={{
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
          }}
          onPress={() => {
            navigate('UserListScreen');
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Bypass
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else return null;
};
export default LoginByPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
