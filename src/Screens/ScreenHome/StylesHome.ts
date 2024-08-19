import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8EDE3',
    },
    cardcontainer: {
      backgroundColor: 'lightpink',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      height:158,
      marginLeft:20,
      width:400,
    },
    thumbnail: {
      width: 400,
      height: 180,
      borderRadius: 8,
     //bottom:200,
    },
    title: {
        marginLeft:10,
    //  marginTop: 8,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    Description: {
      marginTop: 4,
      fontSize: 14,
      color: '#555',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 16,
    },
    text:{

    }
  });
  