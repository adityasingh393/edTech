import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/interfaces/types';
import { styles } from './StylesWelcome';
import LinearGradient from 'react-native-linear-gradient';
import DemoVideoSection from './Components/DemoVideoSection';
import GradientButton from './Components/GradientButton';

type WelcomePageNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenSubscription'>;

const WelcomePage = () => {
  const navigation = useNavigation<WelcomePageNavigationProp>();
  const handleSubscriptionPress = () => {
    navigation.navigate('ScreenSubscription');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Our Service</Text>
          <Text style={styles.text}>
            Subscribe to our service to access exclusive content and premium features!
          </Text>

          <LinearGradient
            colors={['#C72FF8', '#6177EE', '#6177EE']}
            start={{ x: 0.9, y: -0.3 }}
            style={styles.subscribeButton}
          >
            <GradientButton text="Choose Your Plans" onPress={handleSubscriptionPress} />
          </LinearGradient>

          <Text style={styles.subTitle}>Demo Videos</Text>

          <DemoVideoSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomePage;
