import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subscribeButton: {
      padding: 15,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 30,
    },
    subscribeButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    videoButton: {
      padding: 15,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
      alignItems: 'center',
    },
    videoButtonText: {
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      padding: 10,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      marginBottom: 20,
    },
    closeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    video: {
      width: '90%',
      height: 200,
    },
  });
  