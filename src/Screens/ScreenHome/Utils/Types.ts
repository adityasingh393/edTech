import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../utils/interfaces/types";

export interface CardContainerProps{
    Images:string;
    CourseTitle:string;
}
export interface CardData{
    CourseDescription:string;
    NoOfEnrollments:number;
}
export type ScreenHomeNavigationProp =  NativeStackNavigationProp<RootStackParamList, 'Home'>;
  