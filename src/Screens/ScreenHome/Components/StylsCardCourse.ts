import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  CardCoursecontainer: {
    marginTop:20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    height: 1250,  
    margin: 20,
    width: 430,
   
  },
  CardCourseImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  CardCourseTitle: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 30,
    fontWeight: '700',
    color: '#1F1F39'
  },
  CardCourseDescription: {
    width: 'auto',
    marginTop: 10,
    fontSize: 18,
    color: '#36454F',
    lineHeight: 20,
    marginLeft: 30,
  },
  CardDescriptionHeading: {
    marginLeft: 48,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1F39'
  },
  CardEnrollmentHeading: {
    marginLeft: 220,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1F39'
  },
  CardCourseEnrollments: {
    marginLeft: 300,
    bottom: 25,
    fontSize: 18,
    color: '#36454F',
  },
  separator: {
    height: 2,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#36454F',
    marginBottom: 4,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  thumbnail: {
    width: 180, 
    height: 110,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  fetchedDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  fetchedTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  fetchedItemsList: {
    maxHeight: 500, 
    paddingHorizontal: 10,

  },
  EnrollmentIcon:{
    marginBottom:500,
    width:10,
  },
  DescriptionIcon:{
    bottom:1295,
marginLeft:13,
  },
});