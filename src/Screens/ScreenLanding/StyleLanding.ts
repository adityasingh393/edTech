import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/Dimensions';
import colors from '../../utils/Theme';

export const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.Primary,
  },
  card: {
    backgroundColor: colors.White,
    borderRadius: wp('7.2%'),
    shadowOffset: {width: 0, height: hp('0.24%')},
    shadowOpacity: 0.25,
    shadowRadius: hp('0.5%'),
    elevation: 5,
    height: hp('80%'),
    width: wp('100%'),
    top: hp('7.5%'),
  },
  Headertitle: {
    top: hp('3.7%'),
    fontSize: wp('12%'),
    fontWeight: 'bold',
    marginBottom: hp('1.2%'),
    textAlign: 'center',
    color: colors.Secondary,
  },
  button: {
    width: wp('80%'),
    height: hp('7.3%'),
    borderRadius: wp('12%'),
    left: wp('9.8%'),
    top: hp('13.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientButton: {
    width: '100%',
    height: '100%',
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.White,
    fontSize: wp('5.3%'),
    textAlign: 'center',
  },
  infotext: {
    textAlign: 'center',
    top: hp('7%'),
    lineHeight: hp('3.3%'),
    fontSize: wp('4.7%'),
    color: colors.TextColor,
    padding: 10,
  },
  LandingImage: {
    top: hp('8%'),
    width: wp('100%'),
    height: hp('35%'),
  },
  BrandHeader: {
    top: hp('3.7%'),
    fontSize: wp('10%'),
    fontWeight: 'bold',
    marginBottom: hp('1.2%'),
    textAlign: 'center',
    color: colors.Primary,
  },
});
