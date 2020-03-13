import {connect} from 'react-redux';
import {FetchUserList} from '../actions/UserAction';

mapDispatchToProps = dispatch => ({
  GetUSerList: () => dispatch(FetchUserList()),
});

mapStateToProps = state => {
  return {
    UserList: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
