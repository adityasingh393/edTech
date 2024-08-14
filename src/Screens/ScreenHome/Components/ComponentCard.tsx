import React from 'react';
import { View, Text, Image } from 'react-native';
import { CardData } from '../Utils/Types';
import { styles } from '../StylesHome';

interface CardComponentProps {
  item: CardData;
}

const CardComponent: React.FC<CardComponentProps> = ({ item }) => (
  <View style={styles.cardcontainer}>
    <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.text}>Duration: {item.duration}</Text>
    <Text style={styles.text}>Views: {item.views}</Text>
  </View>
);

export default CardComponent;
