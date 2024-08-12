import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    CardCoursecontainer:{
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        height:470,
        margin:8,
        width:400,
        // marginBottom:100,
    },
    CardCourseImage:{
        width: 400,
        height: 200,
        borderRadius: 8,
    },
    CardCourseTitle:{
        marginLeft:10,
        marginTop: 20,
        fontSize: 30,
        fontWeight: '700',
        color: '#C5705D'
    },
    CardCourseEnrollments:{
        marginLeft:140,
        bottom:25,
        fontSize: 18,
        color: '#C5705D'    },
    CardCourseDescription:{
        width:'auto',
        marginTop: 10,
        fontSize: 18,
        color: '#36454F',
       
        lineHeight:20,
marginLeft:30,

},
CardDescriptionHeading:{
    marginLeft:10,
        marginTop: 16,
        fontSize: 20,
        fontWeight: '700',
         color: '#C5705D'
},
CardEnrollmentHeading:{
    marginLeft:20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#C5705D'},

})
