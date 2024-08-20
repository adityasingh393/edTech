import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils/Dimensions'; 

export const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    height: hp('7%'), 
    backgroundColor: '#fff', 
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
});
