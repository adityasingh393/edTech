import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils/Dimensions';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  WelcomeContainer: {
    flex: 1,
    paddingTop: hp('2%'),
    marginTop: hp('10%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  WelcomeTitle: {
    fontSize: wp('6%'),
    marginBottom: hp('2%'),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  WelcomeText: {
    fontSize: wp('4.5%'),
    marginBottom: hp('2%'),
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    fontSize: wp('5%'),
    marginBottom: hp('1%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subscribeButton: {
    borderRadius: wp('2%'),
    overflow: 'hidden',
    marginBottom: hp('3%'),
  },
  gradientButton: {
    padding: hp('2%'),
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  videoCardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  videoCard: {
    padding: hp('2%'),
    borderRadius: wp('2%'),
    backgroundColor: '#fff',
    marginBottom: hp('2%'),
    alignItems: 'center',
    shadowColor: '#888',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('20%'),
  },
  videoButtonText: {
    fontSize: wp('4%'),
    color: 'black',
    marginLeft: wp('2.5%'),
    flex: 1,
    textAlign: 'center',
  },
  thumbnail: {
    width: wp('30%'),
    height: hp('12%'),
    borderRadius: wp('2%'),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    padding: hp('1.5%'),
    backgroundColor: '#6177EE',
    borderRadius: wp('2%'),
    marginBottom: hp('2%'),
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  video: {
    width: wp('90%'),
    height: hp('25%'),
  },
});
