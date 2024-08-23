import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../../utils/Dimensions';
import colors from '../../../utils/Theme';
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: hp('25%'),
      backgroundColor: colors.HeadingColor,
    },
    fullScreenContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      backgroundColor: colors.HeadingColor,
    },
    videoContainer: {
      width: '100%',
    },
    video: {
      width: '100%',
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    controlsRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: wp("8"),
      height: wp("8"),
      tintColor: colors.White,
    },
    playPauseIcon: {
      marginLeft: wp("10%"),
      marginRight: wp("10%"),
    },
    sliderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      bottom: hp("2%"),
      width: '100%',
      paddingLeft: wp("5%"),
      paddingRight: wp("5%"),
    },
    slider: {
      width: wp("60%"),
      height: hp("5%"),
    },
    timeText: {
      color: colors.White,
    },
    fullScreenToggleContainer: {
      position: 'absolute',
      top: hp("2%"),
      right: wp("5%"),
    },
  });
export default styles;