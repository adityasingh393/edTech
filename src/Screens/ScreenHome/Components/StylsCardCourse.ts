import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../utils/Dimensions";

export const styles = StyleSheet.create({
  CardCoursecontainer: {
    marginTop: hp('2.5%'),
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 20,
    height: hp('87%'),  
    marginHorizontal: wp('2.5%'),
    marginBottom: hp('2.5%'),
    width: wp('87.5%'), 
    padding: wp('3.75%'),
    margin: wp('2.5%'),
  },
  CardCourseImage: {
    width: '100%',
    height: hp('20.75%'),  
    borderRadius: 8,
  },
  CardCourseTitle: {
    marginLeft: wp('1.25%'),
    marginTop: hp('1.25%'),
    fontSize: wp('5%'),  
    fontWeight: '700',
    color: '#1F1F39',
  },
  separator: {
    height: hp('0.25%'),
    backgroundColor: '#ddd',
    marginVertical: hp('1%'),
  },
  fetchedItemsList: {
    maxHeight: hp('90%'),  
    paddingHorizontal: wp('1.25%'),
  },
  text: {
    fontSize: wp('3.75%'),  
    color: '#36454F',
    marginBottom: hp('0.5%'),
  },
  thumbnail: {
    width: wp('43%'), 
    height: hp('12.5%'),
    borderRadius: 8,
  },
  title: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: 'black',
    marginBottom: hp('1%'),
  },
  fetchedDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1.25%'),
  },
  fetchedTextContainer: {
    flex: 1,
    marginLeft: wp('1.25%'),
  },
  error: {
    color: 'red',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('0.75%'),
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('0.25%'),
  }
});