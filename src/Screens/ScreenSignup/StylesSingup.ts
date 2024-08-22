import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/Dimensions';
import colors from '../../utils/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  Headingtext: {
    fontWeight: '400',
    fontSize: wp('11%'),
    color: colors.white,
    position: 'absolute',
    top: hp('12%'),
    left: wp('5%'),
  },
  SignupInput: {
    borderRadius: 12,
    borderWidth: 1.5,
    padding: hp('2%'),
    marginVertical: hp('1%'),
    width: wp('80%'),
    alignSelf: 'center',
    borderColor: colors.primary,
    top: hp('15%'),
  },
  errorText: {
    color: colors.ErrorColor,
    top: hp('14.5%'),
    marginLeft: wp('7%'),
  },
  Signupbutton: {
    height: hp('7.5%'),
    borderRadius: wp('7%'),
    width: wp('80%'),
    alignSelf: 'center',
    top: hp('18.6%'),
    alignItems: 'center',
  },
  SignupbuttonText: {
    color: colors.white,
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: hp('8%'),
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: wp('7.5%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: hp('0.5%')},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    position: 'absolute',
    elevation: 5,
    height: hp('105%'),
    width: wp('100%'),
    alignSelf: 'center',
    padding: wp('5%'),
  },
  Iconcard: {
    backgroundColor: colors.IconCardColor,
    shadowOffset: {width: 0, height: hp('0.5%')},
    shadowOpacity: 0.25,
    elevation: 1,
    height: hp('7%'),
    width: wp('90%'),
    borderRadius: wp('2.5%'),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: hp('23%'),
  },
  StyleIcon: {
    width: wp('9.5%'),
    right: wp('100%'),
    top: hp('-16.2%'),
    position:'absolute',
  },
});
