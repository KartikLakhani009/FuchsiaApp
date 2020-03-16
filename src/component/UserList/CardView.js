import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Appstyle from '../../Config/AppStyle';

class CardView extends Component {
  render() {
    const {userinfo, Action} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          // alert('working');
          return Action(userinfo.id);
        }}>
        <Image
          source={{
            uri: userinfo.avatar
              ? userinfo.avatar
              : 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg',
          }}
          style={styles.image}></Image>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>
            {userinfo.first_name + ' ' + userinfo.last_name}
          </Text>
          <Text style={styles.smallText}>{userinfo.email}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default CardView;

const styles = StyleSheet.create({
  container: {
    marginBottom: '2%',
    // margin: '2%',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 3,
  },
  subcontainer: {
    flexDirection: 'column',
  },
  image: {
    width: Appstyle.countPixelRatio(50),
    height: Appstyle.countPixelRatio(50),
    borderRadius: Appstyle.countPixelRatio(50 / 2),
    overflow: 'hidden',
    marginLeft: '2%',
    marginRight: '2.5%',
  },
  title: {
    fontSize: Appstyle.fontSizeH2,
    fontWeight: 'bold',
  },
  smallText: {
    marginBottom: '1%',
    fontSize: Appstyle.fontSizeH4,
    color: Appstyle.COLOR.slateGrey,
  },
});
