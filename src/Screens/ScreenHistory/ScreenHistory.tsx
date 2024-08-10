import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { getDBConnection, createTable, getVideoHistory } from '../../utils/storage/db';
import { VideoHistory } from '../../utils/interfaces/types';

const HistoryScreen: React.FC = () => {
  const [history, setHistory] = useState<VideoHistory[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      const db = await getDBConnection();
      await createTable(db);
      const historyData = await getVideoHistory(db);
      setHistory(historyData);
    };

    loadHistory();
  }, []);

  const renderItem = ({ item }: { item: VideoHistory }) => (
    <TouchableOpacity onPress={() => continueWatching(item)}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Image source={{ uri: item.thumbnailUrl }} style={{ width: 120, height: 90 }} />
        <View style={{ marginLeft: 10 }}>
          <Text>{item.title}</Text>
          <Text>{item.author}</Text>
          
        </View>
      </View>
    </TouchableOpacity>
  );

  const continueWatching = (video: VideoHistory) => {
   


};

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No watch history available.</Text>}
      />
    </View>
  );
};

export default HistoryScreen;
