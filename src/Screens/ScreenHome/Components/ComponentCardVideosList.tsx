import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import CardComponent from './ComponentCard';
import { CardData } from '../Utils/Types';
import { styles } from '../StylesHome';

const CardList: React.FC = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.home);

  const renderItem = ({ item }: { item: CardData }) => <CardComponent item={item} />;

  return (
    <View style={styles.cardcontainer}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}

      />
    </View>
  );
};

export default CardList;
