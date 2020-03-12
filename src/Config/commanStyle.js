import {StyleSheet} from 'react-native';
import AppStyle from './AppStyle';

export default StyleSheet.create({
  btnSubmit: {
    width: '100%',
    height: AppStyle.responsiveHeight(6.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyle.COLOR.windowsBlue,
    display: 'flex',
    borderRadius: AppStyle.countPixelRatio(5),
    shadowColor: AppStyle.COLOR.darkSkyBlue,
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: {height: 10, width: 5},
    // marginTop: '2%',
  },
  btnText: {color: 'white', textAlign: 'center'},
  Title: {
    fontSize: AppStyle.fontSizeH2,
  },
  header: {
    fontSize: AppStyle.fontSizeH1,
    color: AppStyle.COLOR.darkIndigo,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
