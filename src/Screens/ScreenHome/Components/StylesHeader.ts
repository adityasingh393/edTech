import { StyleSheet } from 'react-native';
import colors from '../../../utils/Theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('2.5%'), 
    backgroundColor: colors.primary,
    height: hp('12.5%'), 
  },
  headerText: {
    fontSize: wp('7%'), 
    color: colors.white,
    fontWeight: '700',
    marginTop: hp('2%'), 
    marginLeft: wp('15%'), 
  },
  UserProfile: {
    marginTop: hp('2.5%'),
    right: wp('45%'),
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
