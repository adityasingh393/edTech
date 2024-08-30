
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/Dimensions';
import colors from "../../../../utils/Theme";
export const localStyles = StyleSheet.create({
  subscribeButton: {
    borderRadius: wp('2%'),
    overflow: 'hidden',
    marginTop: hp('3%'),
    alignItems: 'center',
    width: wp('90%'),
    alignSelf: 'center',
  },
  gradientButton: {
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    width: '100%',
  },
  subscribeButtonText: {
    color: colors.White,
    fontSize: wp('4.5%'), 
    fontWeight: '600',
  },
});
