import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { AppStackParamList } from "../../../utils/interfaces/types";

export interface CardData {
    thumbnailUrl: string;
    views: number;
    duration: string;
    title: string;
  }
  
  export interface HomeState {
    data: CardData[];
    loading: boolean;
    error: string | null;
  }
  export interface CardContainerProps{
        Images:any,
        CourseTitle:string,
        CourseDescription:string,
        NoOfEnrollments:number,
  }

export type ScreenHomeNavigationProp =  NativeStackNavigationProp<AppStackParamList, 'Home'>;
  