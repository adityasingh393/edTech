import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../utils/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: wp('4%'),
    paddingTop: hp('2%'),
  },
  noVideosText: {
    textAlign: 'center',
    marginTop: hp('20%'),
    fontSize: wp('5%'),
    color: '#333',
  },
  videoItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: hp('2%'),
    padding: wp('4%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  videoTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#333',
    marginBottom: hp('1%'),
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: hp('1%'),
  },
  deleteButton: {
    color: '#C5705D',
    fontSize: wp('4%'),
    fontWeight: '600',
  },
});

export default styles;
