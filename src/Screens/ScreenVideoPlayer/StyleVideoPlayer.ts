import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/Dimensions';
import colors from '../../utils/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    marginTop: hp('5%'),
  },
  mediaPlayerContainer: {
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    height: hp('25%'),
    marginBottom: hp('2%'),
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: wp('6%'),
    backgroundColor: colors.White,
    borderRadius: 20,
    margin: 10,
  },
  watchlistContainer: {
    width: wp('83%'), 
    marginTop:hp('-3%'),
    marginBottom: hp('1.5%'),
  },
  watchlistButton: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('7%'),
    alignItems: 'center',
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
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('7%'),
  },
  downloadText: {
    fontSize: wp('4%'),
    color: '#fff',
    textAlign: 'center',
  },
  downloadIcon: {
    width: wp('6%'),
    height: wp('6%'),
    tintColor: '#fff',

    marginRight: wp('2%'), 
  },
  descriptionTitle: {
    fontSize: wp('5%'),
    color: colors.Secondary,
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  descriptionText: {
    fontSize: wp('4%'),
    color: colors.TextColor,
    letterSpacing: 0.5,
    lineHeight: hp('3%'),
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;