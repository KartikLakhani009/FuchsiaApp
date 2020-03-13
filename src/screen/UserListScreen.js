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
                    alert('button pressed');
                  }}>
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
    marginHorizontal: '1.5%',
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
