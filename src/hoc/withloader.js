import {connect} from 'react-redux';
import {LoaderFire} from '../actions/LoaderAction';

mapDispatchToProps = dispatch => ({
  LoaderFired: payload => dispatch(LoaderFire(payload)),
});

mapStateToProps = state => {
  return {
    LoaderValue: state.Loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
