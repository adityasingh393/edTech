import React, { useEffect } from 'react';
import { View,  } from 'react-native';
import BrandLogo from '../../Assets/ImagesData/BrandLogo';
import { styles } from './SplashStyle';

const SplashScreen: React.FC<{ onTimeout: () => void }> = ({ onTimeout }) => {
  useEffect(() => {
  
    const timer = setTimeout(() => {
      onTimeout();
    }, 1000); 

   
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <View style={styles.container}>
          <BrandLogo />
    
    </View>
  );
};

;

export default SplashScreen;
