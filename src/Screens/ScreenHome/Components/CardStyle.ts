import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 8,
      marginBottom: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    description: {
      fontSize: 14,
      color: '#555',
      marginBottom: 4,
    },
    enrollments: {
      fontSize: 12,
      color: '#999',
    },
  });