
// import React from 'react';
// import { Alert, } from 'react-native';

// interface OfflineAlertAlertProps {
//   isVisible: boolean;
//   onDismiss: () => void;
//   onNavigateToDownloads?: () => void;
// }

// const OfflineAlertAlert: React.FC<OfflineAlertAlertProps> = ({ isVisible, onDismiss, onNavigateToDownloads }) => {
//   React.useEffect(() => {
//     if (isVisible) {
//       Alert.alert(
//         'No Internet Connection',
//         'You are currently offline. Please check your internet connection.',
//         [
//           {
//             text: 'Go to Downloads',
//             onPress: onNavigateToDownloads,
//           },
//           {
//             text: 'Dismiss',
//             onPress: onDismiss,
//             style: 'cancel',
//           },
//         ],
//         { cancelable: false }
//       );
//     }
//   }, [isVisible, onDismiss, onNavigateToDownloads]);

//   return null; 
// };

// export default OfflineAlertAlert;


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


// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';

// interface OfflineAlertBottomSheetProps {
//   isVisible: boolean;
//   onDismiss: () => void;
//   onNavigateToDownloads?: () => void;
// }

// const OfflineAlertBottomSheet: React.FC<OfflineAlertBottomSheetProps> = ({ isVisible, onDismiss, onNavigateToDownloads }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // Bottom sheet snap points
//   const snapPoints = useMemo(() => ['25%'], []);

//   // Handle the bottom sheet close
//   const handleClosePress = useCallback(() => {
//     bottomSheetRef.current?.close();
//     onDismiss();
//   }, [onDismiss]);

//   // Show bottom sheet when isVisible changes to true
//   React.useEffect(() => {
//     if (isVisible) {
//       bottomSheetRef.current?.expand();
//     } else {
//       bottomSheetRef.current?.close();
//     }
//   }, [isVisible]);

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={-1}
//       snapPoints={snapPoints}
//       enablePanDownToClose={true}
//       onClose={onDismiss}
//     >
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>No Internet Connection</Text>
//         <Text style={styles.message}>
//           You are currently offline. Please check your internet connection.
//         </Text>
//         <TouchableOpacity style={styles.button} onPress={onNavigateToDownloads}>
//           <Text style={styles.buttonText}>Go to Downloads</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cancelButton} onPress={handleClosePress}>
//           <Text style={styles.cancelButtonText}>Dismiss</Text>
//         </TouchableOpacity>
//       </View>
//     </BottomSheet>
//   );
// };

// const styles = StyleSheet.create({
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#6177EE',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cancelButton: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   cancelButtonText: {
//     color: '#6177EE',
//     fontSize: 16,
//   },
// });

// export default OfflineAlertBottomSheet;


// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';

// interface OfflineAlertBottomSheetProps {
//   isVisible: boolean;
//   onDismiss: () => void;
//   onNavigateToDownloads?: () => void;
// }

// const OfflineAlertBottomSheet: React.FC<OfflineAlertBottomSheetProps> = ({ isVisible, onDismiss, onNavigateToDownloads }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // Bottom sheet snap points
//   const snapPoints = useMemo(() => ['25%'], []);

//   // Handle the bottom sheet close
//   const handleClosePress = useCallback(() => {
//     bottomSheetRef.current?.close();
//     onDismiss();
//   }, [onDismiss]);

//   // Show bottom sheet when isVisible changes to true
//   React.useEffect(() => {
//     if (isVisible) {
//       bottomSheetRef.current?.expand();
//     } else {
//       bottomSheetRef.current?.close();
//     }
//   }, [isVisible]);

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={isVisible ? 0 : -1} // Correctly set index based on visibility
//       snapPoints={snapPoints}
//       enablePanDownToClose={true}
//       onClose={onDismiss}
//     >
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>No Internet Connection</Text>
//         <Text style={styles.message}>
//           You are currently offline. Please check your internet connection.
//         </Text>
//         <TouchableOpacity style={styles.button} onPress={onNavigateToDownloads}>
//           <Text style={styles.buttonText}>Go to Downloads</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cancelButton} onPress={handleClosePress}>
//           <Text style={styles.cancelButtonText}>Dismiss</Text>
//         </TouchableOpacity>
//       </View>
//     </BottomSheet>
//   );
// };

// const styles = StyleSheet.create({
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#6177EE',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cancelButton: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   cancelButtonText: {
//     color: '#6177EE',
//     fontSize: 16,
//   },
// });

// export default OfflineAlertBottomSheet;


// import React, { useCallback, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// // import { styles } from './StylsOfflineAlert'; // Import your styles

// interface OfflineAlertAlertProps {
//   isVisible: boolean;
//   onDismiss: () => void;
//   onNavigateToDownloads?: () => void;
// }

// const OfflineAlertAlert: React.FC<OfflineAlertAlertProps> = ({ isVisible, onDismiss, onNavigateToDownloads }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);

 
//   React.useEffect(() => {
//     if (isVisible) {
//       bottomSheetRef.current?.expand();
//     } else {
//       bottomSheetRef.current?.close();
//     }
//   }, [isVisible]);

  
//   const handleDismiss = useCallback(() => {
//     onDismiss();
//   }, [onDismiss]);

 
//   const handleNavigate = useCallback(() => {
//     if (onNavigateToDownloads) {
//       onNavigateToDownloads();
//     }
//     handleDismiss();
//   }, [onNavigateToDownloads, handleDismiss]);

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={-1} 
//       snapPoints={['50%']} 
//       onClose={handleDismiss}
//       backgroundStyle={styles.bottomSheetBackground}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>No Internet Connection</Text>
//         <Text style={styles.message}>You are currently offline. Please check your internet connection.</Text>
//         <View style={styles.buttonContainer}>
//           {onNavigateToDownloads && (
//             <TouchableOpacity style={styles.button} onPress={handleNavigate}>
//               <Text style={styles.buttonText}>Go to Downloads</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={styles.button} onPress={handleDismiss}>
//             <Text style={styles.buttonText}>Dismiss</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </BottomSheet>
//   );
// };
// export const styles = StyleSheet.create({
//   bottomSheetBackground: {
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });
// export default OfflineAlertAlert;


// import React, { useCallback, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';

// interface OfflineAlertBottomSheetProps {
//   isVisible: boolean;
//   onDismiss: () => void;
//   onNavigateToDownloads?: () => void;
// }

// const OfflineAlertBottomSheet: React.FC<OfflineAlertBottomSheetProps> = ({ isVisible, onDismiss, onNavigateToDownloads }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // Handle the bottom sheet close
//   const handleClosePress = useCallback(() => {
//     bottomSheetRef.current?.close();
//     onDismiss();
//   }, [onDismiss]);

//   // Show bottom sheet when isVisible changes to true
//   useEffect(() => {
//     if (isVisible) {
//       bottomSheetRef.current?.expand();
//     } else {
//       bottomSheetRef.current?.close();
//     }
//   }, [isVisible]);

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={isVisible ? 0 : -1} // Set index based on visibility
//       snapPoints={['50%']} 
//       onClose={handleClosePress}
//       backgroundStyle={styles.bottomSheetBackground}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>No Internet Connection</Text>
//         <Text style={styles.message}>You are currently offline. Please check your internet connection.</Text>
//         <View style={styles.buttonContainer}>
//           {onNavigateToDownloads && (
//             <TouchableOpacity style={styles.button} onPress={onNavigateToDownloads}>
//               <Text style={styles.buttonText}>Go to Downloads</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={styles.button} onPress={handleClosePress}>
//             <Text style={styles.buttonText}>Dismiss</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </BottomSheet>
//   );
// };

// const styles = StyleSheet.create({
//   bottomSheetBackground: {
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default OfflineAlertBottomSheet;


// import React, { useCallback, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';

// interface OfflineAlertAlertProps {
//   isVisible: boolean;
//   onDismiss: () => void;
//   onNavigateToDownloads?: () => void;
// }

// const OfflineAlertBottomSheet: React.FC<OfflineAlertAlertProps> = ({
//   isVisible,
//   onDismiss,
//   onNavigateToDownloads,
// }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);

  
//   useEffect(() => {
//     if (isVisible) {
//       bottomSheetRef.current?.expand();
//     } else {
//       bottomSheetRef.current?.close();
//     }
//   }, [isVisible]);

//   const handleDismiss = useCallback(() => {
//     onDismiss();
//   }, [onDismiss]);

//   const handleNavigate = useCallback(() => {
//     if (onNavigateToDownloads) {
//       onNavigateToDownloads();
//     }
//     handleDismiss();
//   }, [onNavigateToDownloads, handleDismiss]);

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={-1}
//       snapPoints={['50%']} 
//       onClose={handleDismiss}
//       backgroundStyle={styles.bottomSheetBackground}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>No Internet Connection</Text>
//         <Text style={styles.message}>
//           You are currently offline. Please check your internet connection.
//         </Text>
//         <View style={styles.buttonContainer}>
//           {onNavigateToDownloads && (
//             <TouchableOpacity style={styles.button} onPress={handleNavigate}>
//               <Text style={styles.buttonText}>Go to Downloads</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={styles.button} onPress={handleDismiss}>
//             <Text style={styles.buttonText}>Dismiss</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </BottomSheet>
//   );
// };

// const styles = StyleSheet.create({
//   bottomSheetBackground: {
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default OfflineAlertBottomSheet;
