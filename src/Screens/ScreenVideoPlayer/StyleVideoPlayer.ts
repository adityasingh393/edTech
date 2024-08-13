import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/Dimensions';
import colors from '../../utils/Theme'; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    mediaPlayerContainer: {
      margin: 10,
      borderColor: colors.secondary,
      borderWidth: 4,
      borderRadius: 20,
      height: hp('25%'),
      marginBottom: hp('2%'),
      overflow: 'hidden', 
    },
//     fullScreenConatiner:{
// height:hp('45%')
//     },
    detailsContainer: {
      padding: wp('6%'),
      backgroundColor: 'white',
      borderRadius: 20,
      margin: 10,
    },
    downloadContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: hp('2%'),
    },
    downloadButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#C5705D',
      paddingVertical: hp('1.5%'),
      paddingHorizontal: wp('4%'),
      borderRadius: 8,
    },
    downloadText: {
      fontSize: wp('4%'),
      color: '#fff',
      marginRight: wp('2%'),
    },
    downloadIcon: {
      width: wp('6%'),
      height: wp('6%'),
      tintColor: '#fff',
    },
    descriptionTitle: {
      fontSize: wp('5%'),
      color: colors.secondary,
      fontWeight: 'bold',
      marginBottom: hp('1%'),
    },
    descriptionText: {
      fontSize: wp('4%'),
      color: '#555',
      letterSpacing: 0.5,
      lineHeight: hp('3%'),
    },
  });
  
  export default styles;
  