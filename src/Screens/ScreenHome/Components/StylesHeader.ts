import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utils/Dimensions';
import colors from '../../../utils/Theme';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('2.5%'),
    backgroundColor: colors.primary,
    height: hp('12.5%'),
  },
  userSection: {
    marginTop: hp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('3%'),
  },
  userProfile: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
  },
  headerText: {
    fontSize: wp('5.5%'),
    color: colors.white,
    fontWeight: '700',
    marginLeft: wp('3%'),
  },
  logoutButton: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: colors.white,
    borderRadius: wp('9.5%'),
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  logoutButtonText: {
    color: colors.primary,
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});

export default styles;