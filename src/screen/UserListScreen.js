import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

//component
import Withuser from '../hoc/Withuser';
import CardView from '../component/UserList/CardView';

import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler,
  exitAlert,
} from '../lib/Hardware/androidBackButton';

import {USERSTORE} from '../statics/GlobalStatics';

//styles
import commonstyles from '../Config/commanStyle';
import AppStyle from '../Config/AppStyle';
import {NavigationActions} from 'react-navigation';

class UserListScreen extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount() {
    // this.BackHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   this.handleBackButtonClick,
    // );
    const {
      UserList: {firstTime},
      GetUSerList,
    } = this.props;
    if (firstTime == false) {
      GetUSerList();
    }
  }

  // UNSAFE_componentWillUnmount() {
  //   BackHandler.removeEventListener(
  //     'hardwareBackPress',
  //     this.handleBackButtonClick,
  //   );
  // }

  handleBackButtonClick() {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel Pressed');
          },
          style: 'cancel',
        },
        {text: 'Logout', onPress: () => console.log('Log Out')},
      ],
      {cancelable: false},
    );
    // this.props.navigation.goBack(null);
    return true;
  }

  GetUserById = id => {
    const {
      UserList: {users},
      navigation: {navigate},
    } = this.props;

    // console.log(' Id  ', id);

    // let res = users.find(user => {
    //   console.log('useer  :  ', user);
    //   if (Number(user.id) === Number(id)) {
    //     return user;
    //   } else return 'Error';
    // });

    let res = users.filter(user => user.id == id);

    // console.log(' res :  USe : ', res);

    if (res == undefined) {
      alert('There is no record ');
    } else {
      // console.log('User Details : res : ', res);

      return navigate('UserDetailsScreen', {
        userinfo: res[0],
      });
    }
  };

  logout = async () => {
    let res = await AsyncStorage.removeItem(USERSTORE)
      .then(res => console.log(res))
      .catch(err => {
        console.error(err);
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
    const {
      UserList: {users},
      GetUSerList,
    } = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={[styles.header, {flexDirection: 'row'}]}>
          <Text style={styles.headerText}>User List</Text>
          <TouchableOpacity style={styles.ViewLogout} onPress={this.logout}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Logout
            </Text>
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
          {/* //Logout button Plan 
          <View>
            <TouchableOpacity style={styles.ViewLogout} onPress={this.logout}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                Logout
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    );
  }
}
export default Withuser(UserListScreen);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: '2%',
    // marginTop: '2%',
  },
  header: {
    backgroundColor: AppStyle.COLOR.windowsBlue,
    height: AppStyle.responsiveHeight(10),
    alignItems: 'center',
  },
  headerText: {
    marginHorizontal: '5%',
    fontSize: AppStyle.fontSizeH3,
    color: 'white',
  },
  ViewLogout: {
    // flex: 1,
    backgroundColor: 'red',
    // justifyContent: 'flex-end',
    right: '4%',
    top: '18%',
    position: 'absolute',
    padding: 10,
    borderRadius: 30,
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end',
  },
});
