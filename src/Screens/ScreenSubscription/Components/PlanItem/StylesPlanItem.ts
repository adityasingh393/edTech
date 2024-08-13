import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    planButton: {
      padding: 25,
      marginVertical: 10,
      backgroundColor: '#CEECFE',
      color: 'black',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
    },
    selectedPlanButton: {
      backgroundColor: '#6177EE',
      color: 'white',
    },
    planName: {
      fontSize: 22,
      fontWeight: '600',
      color: 'black',
    },
    planPrice: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginVertical: 10,
    },
    planContent: {
      marginTop: 10,
    },
    planDetail: {
      fontSize: 18,
      color: 'black',
      marginVertical: 2,
    },
  });
  