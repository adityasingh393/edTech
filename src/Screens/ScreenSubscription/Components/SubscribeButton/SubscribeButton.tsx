import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './StylesSubscribeButton';

interface SubscribeButtonProps {
  onPress: () => void;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.subscribeButton} onPress={onPress}>
      <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
    </TouchableOpacity>
  );
};

export default SubscribeButton;

