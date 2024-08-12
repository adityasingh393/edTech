import { Watchlist } from '../../utils/interfaces/types';
import { createTable, getDBConnection, insertWatchlist } from '../../utils/storage/db';

export const saveWatchList = async (video: Watchlist, timestamp: number) => {
  try {
    const db = await getDBConnection();
    
  
    await createTable(db);
    
    await insertWatchlist(db, { ...video, lastWatchedTime: timestamp });
    console.log('Video added to watchlist successfully');
  } catch (error) {
    console.error('Error saving watchlist:', error);
  }
};
export const fetchVideoData = async (): Promise<Watchlist | null> => {
  try {
    const videoData: Watchlist = {
      id: '1',
      title: 'Big Buck Bunny',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      duration: '10:34',
      uploadTime: '2021-10-10',
      views: '1M',
      author: 'Blender Foundation',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.',
      subscriber: '1M',
      lastWatchedTime: Date.now(),
    };

    return videoData;
  } catch (error) {
    console.error('Failed to fetch video data:', error);
    return null;
  }
};
