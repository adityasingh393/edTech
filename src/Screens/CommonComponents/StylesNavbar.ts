import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utils/Dimensions";

export const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: hp('1.5%'), 
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    bottom: hp('9%'), 
    height: hp('7.5%'), 
  },
  navbarBottomIcons: {
    padding: wp('1.5%'), 
  },
  MoneyIcon: {
    bottom: hp('42.5%'), 
  },
  DownloadIcon: {
    bottom: hp('41%'), 
  },
  HomeIcon: {
    bottom: hp('40.5%'), 
  }
});
