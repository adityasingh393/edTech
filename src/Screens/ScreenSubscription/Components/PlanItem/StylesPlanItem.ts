import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/Dimensions';

export const styles = StyleSheet.create({
  planButton: {
    padding: hp('3%'), 
    marginVertical: hp('1.5%'),  
    backgroundColor: '#CEECFE',
    color: 'black',
    borderRadius: wp('2.5%'), 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: hp('0.5%') }, 
    shadowRadius: wp('2%'), 
    width: wp('90%'), 
    alignSelf: 'center', 
  },
  selectedPlanButton: {
    backgroundColor: '#6177EE',
    color: 'white',
  },
  planName: {
    fontSize: wp('5.5%'), 
    fontWeight: '600',
    color: 'black',
  },
  planPrice: {
    fontSize: wp('5%'),  
    fontWeight: 'bold',
    color: 'black',
    marginVertical: hp('1%'), 
  },
  planContent: {
    marginTop: hp('1.5%'), 
  },
  planDetail: {
    fontSize: wp('4.5%'), 
    color: 'black',
    marginVertical: hp('0.5%'),  
  },
});
