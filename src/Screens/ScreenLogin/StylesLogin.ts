import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/Dimensions';
import colors from '../../utils/Theme';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: hp('5%'),
  },
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
  LoginInput: {
    borderRadius: 12,
    borderWidth: 1.5,
    padding: hp('2%'),
    marginVertical: hp('1%'),
    width: wp('80%'),
    alignSelf: 'center',
    borderColor: colors.primary,
    top: hp('12.8%'), 
  },
  errorText: {
    color: colors.ErrorColor,
    bottom: hp('-12%'), 
    
    marginLeft: wp('7%'),
  },
  Loginbutton: {
    height: hp('7.5%'),
    borderRadius: wp('7%'),
    width: wp('80%'),
    alignSelf: 'center',
    top: hp('14.6%'), 
    alignItems: 'center',
  },
  LoginbuttonText: {
    color: colors.white,
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: hp('7.5%'), 
  },
  Signupbutton: {
    height: hp('7.5%'),
    borderRadius: wp('7%'),
    width: wp('80%'),
    alignSelf: 'center',
    top: hp('18%'),
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
    elevation: 5,
    height: hp('110%'),
    width: wp('100%'),
    alignSelf: 'center',
    padding: wp('5%'),
    position:'absolute',
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
    top: hp('25%'),
  },
  StyleIcon: {
    width: wp('10.5%'),
    right: wp('100%'),
    bottom: hp('65.2%'),
  
    position:'absolute',
  },
});
