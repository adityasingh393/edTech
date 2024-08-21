import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils/Dimensions'; 
import colors from '../../utils/Theme';

export const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    height: hp('7%'), 
    backgroundColor: colors.IconCardColor, 
    paddingHorizontal: wp('2%'), 
    position: 'absolute',
    bottom: hp('0.3%'), 
    width: wp('100%'), 
  },
  
  iconContainer: {
    flex: 1, 
    alignItems: 'center', 
  },

  navbarBottomIcons: {
    width: wp('15%'), 
    height: hp('6%'), 
  },
  
  brandLogoContainer: {
    flex: 2,  
    top:hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
