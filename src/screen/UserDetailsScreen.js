import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//styles
import commonstyles from '../Config/commanStyle';
import AppStyle from '../Config/AppStyle';

class UserDetailsScreen extends Component {
  render() {
    // console.log('UserDetailsScreen : Props : ', this.props);
    const {userinfo} = this.props.navigation.state.params;
    const userInfo = userinfo;
    return (
      <View style={styles.MainContainer}>
        <View style={styles.ProfileBackground}>
          <Image
            source={{
              uri: userInfo.avatar
                ? userInfo.avatar
                : 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg',
            }}
            style={styles.ImageStyle}></Image>
          <Text style={styles.nameStyle}>
            {userInfo.first_name
              ? userInfo.first_name + ' ' + userInfo.last_name
              : 'Name'}
          </Text>
          <Text style={styles.emailStyle}>
            {userInfo.email ? userInfo.email : 'email'}
          </Text>
        </View>
      </View>
    );
  }
}
export default UserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    flex: 1,
    // height: Appstyle.responsiveHeight(50),
    // backgroundColor: 'yellow',
  },
  ProfileBackground: {
    backgroundColor: AppStyle.COLOR.windowsBlue,
    height: AppStyle.responsiveHeight(15),
    alignItems: 'center',
  },

  ImageStyle: {
    height: AppStyle.countPixelRatio(150),
    width: AppStyle.countPixelRatio(150),
    borderRadius: 90,
    marginTop: AppStyle.responsiveHeight(3.5),
    marginBottom: 10,
  },

  nameStyle: {
    fontSize: AppStyle.fontSizeH2,
    fontWeight: 'bold',
  },
  emailStyle: {
    fontSize: AppStyle.fontSizeH3_4,
  },
  btnStyle: {
    // marginTop: 15,
    // backgroundColor: 'green',
    // height: AppStyle.responsiveHeight(5),
    // width: AppStyle.responsiveWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnMainContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    marginBottom: AppStyle.responsiveHeight(3.5),
    marginRight: AppStyle.responsiveWidth(6),
    backgroundColor: 'transparent',
  },
});
