import React, { useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { loginUser, loginWithGoogle } from '../utils/firebaseAuthentication';
import { LoginFormData } from './utils/interface';
import schema from './utils/validation';
import { LoginScreenProps } from '../../utils/interfaces/types';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { styles } from './StylesLogin';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId: '565978315125-fafv1cnccofkjm1r7fe4lok2r7oseqti.apps.googleusercontent.com',
    });
  }, []);

  const onSubmit = (data: LoginFormData) => {
    loginUser(data.email, data.password, dispatch);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle(dispatch);
  };

  return (
    <View style={[styles.container, styles.card]}>
      <Text style={styles.Headingtext}>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.LoginInput}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.LoginInput}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <TouchableOpacity style={styles.Loginbutton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.LoginbuttonText}>Login</Text>
      </TouchableOpacity>

      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />

      <TouchableOpacity style={styles.Iconcard} onPress={handleGoogleLogin}>
        <Text style={styles.GoogleIcon}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
