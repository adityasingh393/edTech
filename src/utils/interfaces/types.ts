import { StackScreenProps } from '@react-navigation/stack';

export interface User {
    email: string;
    name: string;
    phone: string;
    password: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

export type AuthStackParamList = {
    Signup: undefined;
    Login: undefined;
};

export type AppStackParamList = {
    Home: undefined;
    History:undefined;
};

export type SignupScreenProps = StackScreenProps<AuthStackParamList, 'Signup'>;
export type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login' >;
export type HomeScreenProps = StackScreenProps<AppStackParamList, 'Home'>;
export type HistoryScreenProps = StackScreenProps<AppStackParamList,'History'>
export interface Watchlist {
    id: string;
    title: string;
    thumbnailUrl: string;
    duration: string;
    uploadTime: string;
    views: string;
    author: string;
    videoUrl: string;
    description: string;
    subscriber: string;
    lastWatchedTime: number;
}





  //fake data
  import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SaveVideo: undefined;
  HistoryScreen: undefined;
};

type SaveVideoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SaveVideo'
>;
