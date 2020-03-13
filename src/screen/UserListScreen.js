import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

//component
import Withuser from '../hoc/Withuser';

//styles
import commonstyles from '../Config/commanStyle';
import AppStyle from '../Config/AppStyle';

class UserListScreen extends Component {
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

  render() {
    const {
      UserList: {users},
      GetUSerList,
    } = this.props;
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>User List</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={{
                    marginTop: '2%',
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
                  onPress={() => this.GetUserById(item.id)}>
                  <Text
                    style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                    {item.email}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
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
    marginTop: '2%',
  },
  header: {
    backgroundColor: AppStyle.COLOR.windowsBlue,
    height: AppStyle.responsiveHeight(10),
    justifyContent: 'center',
  },
  headerText: {
    marginHorizontal: '5%',
    fontSize: AppStyle.fontSizeH3,
    color: 'white',
  },
});
