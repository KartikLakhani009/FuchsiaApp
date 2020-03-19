import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {AppImages} from '../Images/index';
import commonstyles from '../Config/commanStyle';

const BackButton = props => {
  const {navigation} = props;
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={AppImages.BackLogo} style={commonstyles.backLogo} />
    </TouchableOpacity>
  );
};
export default BackButton;
