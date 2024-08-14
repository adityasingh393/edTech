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
    Landing:undefined;
    Signup: undefined;
    Login: undefined;
    
};
export type AppStackParamList = {
    Home: undefined;
    Video:undefined;
    Downloads: undefined;
};
export interface VideoMetadata {
    contentId: string;
    title: string;
    thumbnailUrl: string;
    videoPath: string;
}
export interface ProgressState {
    currentTime: number;
    seekableDuration: number;
}
export interface VideoPlayerProps {
    videoUri: string;
    onFullScreenToggle: (fullScreen: boolean) => void;
} 

export type SignupScreenProps = StackScreenProps<AuthStackParamList, 'Signup'>;
export type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login' >;
export type HomeScreenProps = StackScreenProps<AppStackParamList, 'Home'>;
export type VideosScreenProps = StackScreenProps<AppStackParamList, 'Video'| 'Home'>;

