import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

//component
import Withuser from '../hoc/Withuser';
import CardView from '../component/UserList/CardView';

import {USERSTORE} from '../statics/GlobalStatics';

//styles
import commonstyles from '../Config/commanStyle';
import AppStyle from '../Config/AppStyle';
import {NavigationActions} from 'react-navigation';

class UserListScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      UserList: {firstTime},
      GetUSerList,
    } = this.props;
    if (firstTime == false) {
      GetUSerList();
    }
  }

  GetUserById = id => {
    const {
      UserList: {users},
      navigation: {navigate},
    } = this.props;

    let res = users.filter(user => user.id == id);

    if (res == undefined) {
      alert('There is no record ');
    } else {
      return navigate('UserDetailsScreen', {
        userInfo: res[0],
      });
    }
  };

  logout = async () => {
    let res = await AsyncStorage.removeItem(USERSTORE)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
        return 'error';
      });

    if (res == 'error') {
      Alert.alert('There is problem ');
    } else {
      this.props.navigation.reset(
        [NavigationActions.navigate({routeName: 'SplashScreen'})],
        0,
      );
    }
  };

  render() {
    const {users} = this.props.UserList;
    return (
      <View style={{flex: 1}}>
        <View style={[styles.header, {flexDirection: 'row'}]}>
          <Text style={styles.headerText}>User List</Text>
          <TouchableOpacity style={styles.viewLogout} onPress={this.logout}>
            <Text style={styles.textLogout}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={[{flex: 1}, styles.container]}>
          <View>
            <FlatList
              data={users}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View>
                  <CardView userinfo={item} Action={this.GetUserById} />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default Withuser(UserListScreen);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2%',
  },
  header: {
    backgroundColor: AppStyle.COLOR.windowsBlue,
    height: AppStyle.responsiveHeight(10),
    alignItems: 'center',
  },
  headerText: {
    marginHorizontal: '5%',
    fontSize: AppStyle.fontSizeH3,
    color: AppStyle.COLOR.WHITE,
    fontFamily: AppStyle.fontExtraBold,
  },
  viewLogout: {
    backgroundColor: AppStyle.COLOR.RED,
    right: '4%',
    top: '16%',
    position: 'absolute',
    padding: AppStyle.countPixelRatio(10),
    marginBottom: '1%',
    borderRadius: AppStyle.countPixelRatio(25),
  },
  textLogout: {
    color: AppStyle.COLOR.WHITE,
    textAlign: 'center',
    fontSize: AppStyle.fontSizeH4,
    fontFamily: AppStyle.fontRegular,
  },
});
