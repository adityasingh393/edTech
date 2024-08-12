import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { getDBConnection, createTable, getWatchlist } from '../../utils/storage/db';
import { Watchlist } from '../../utils/interfaces/types';

const WatchlistScreen: React.FC = () => {
  const [watchlist, setWatchlist] = useState<Watchlist[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Watchlist | null>(null);

  useEffect(() => {
    const loadWatchlist = async () => {
      const db = await getDBConnection();
      
      
      await createTable(db);
      
      const watchlistData = await getWatchlist(db);
      console.log('Fetched watchlist data:', watchlistData);
      setWatchlist(watchlistData);
    };

    loadWatchlist();
  }, []);

  const renderItem = ({ item }: { item: Watchlist }) => (
    <TouchableOpacity onPress={() => setSelectedVideo(item)}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Video
          source={{ uri: item.videoUrl }}
          style={styles.videoThumbnail}
          resizeMode="cover"
          paused={true}
        />
        <View style={{ marginLeft: 10 }}>
          <Text>{item.title}</Text>
          <Text>{item.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={watchlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No watch history available.</Text>}
      />
      {selectedVideo && (
        <View style={styles.modalContainer}>
          <Video
            source={{ uri: selectedVideo.videoUrl }}
            style={styles.videoPlayer}
            controls
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseVideo}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  videoThumbnail: {
    width: 120,
    height: 90,
    backgroundColor: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  videoPlayer: {
    width: '90%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default WatchlistScreen;
