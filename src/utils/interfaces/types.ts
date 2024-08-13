import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

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
  Login: undefined;
  Signup: undefined;
};


export type AppStackParamList = {
  Home: undefined;
 
};

export type RootStackParamList = {
  WelcomePageSub:undefined;
  ScreenSubscription: undefined;
  
};



export type SignupScreenProps = StackScreenProps<AuthStackParamList, 'Signup'>;
export type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;
export type HomeScreenProps = StackScreenProps<AppStackParamList, 'Home'>;
export type WelcomePageProps = StackScreenProps<RootStackParamList, 'WelcomePageSub'>;
export type SubscriptionPageNavigationProp = StackScreenProps<RootStackParamList, 'ScreenSubscription'>;






