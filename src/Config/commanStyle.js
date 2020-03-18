import {StyleSheet} from 'react-native';
import AppStyle from './AppStyle';

export default StyleSheet.create({
  btnSubmit: {
    width: '100%',
    height: AppStyle.responsiveHeight(6.5),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: AppStyle.COLOR.windowsBlue,
    display: 'flex',
    borderRadius: AppStyle.countPixelRatio(5),
    shadowColor: AppStyle.COLOR.darkSkyBlue,
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: {height: 10, width: 5},
    elevation: 2,
    marginTop: AppStyle.countPixelRatio(22),
    // marginTop: '2%',
  },
  btnText: {color: 'white', fontSize: AppStyle.fontSizeParagraph},
  Title: {
    fontSize: AppStyle.fontSizeH1_2,
    color: AppStyle.COLOR.darkIndigo,
    fontWeight: 'bold',
    marginTop: AppStyle.countPixelRatio(13),
  },
  header: {
    fontSize: AppStyle.fontSizeH1,
    color: AppStyle.COLOR.darkIndigo,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  codestyle: {
    color: AppStyle.COLOR.darkSkyBlue,
    fontSize: AppStyle.fontSizeParagraph,
  },
  codestyleView: {
    marginTop: AppStyle.countPixelRatio(5),
  },
  ForgetView: {
    flexDirection: 'row',
    marginTop: AppStyle.countPixelRatio(10),
    marginBottom: AppStyle.countPixelRatio(15),
    justifyContent: 'center',
  },
  ForgetText: {color: AppStyle.COLOR.coolGrey, fontSize: AppStyle.fontSizeH4_5},
  ForgetLink: {
    color: AppStyle.COLOR.darkSkyBlue,
    fontSize: AppStyle.fontSizeH4_5,
  },
});
