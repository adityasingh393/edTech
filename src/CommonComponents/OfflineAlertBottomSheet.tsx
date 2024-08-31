import React from 'react';
import { Alert, } from 'react-native';

interface OfflineAlertAlertProps {
  isVisible: boolean;
  onDismiss: () => void;
  onNavigateToDownloads?: () => void;
}

const OfflineAlertAlert: React.FC<OfflineAlertAlertProps> = ({ isVisible, onDismiss, onNavigateToDownloads }) => {
  React.useEffect(() => {
    if (isVisible) {
      Alert.alert(
        'No Internet Connection',
        'You are currently offline. Please check your internet connection.',
        [
          {
            text: 'Go to Downloads',
            onPress: onNavigateToDownloads,
          },
          {
            text: 'Dismiss',
            onPress: onDismiss,
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
  }, []);

  return null; 
};

export default OfflineAlertAlert;
