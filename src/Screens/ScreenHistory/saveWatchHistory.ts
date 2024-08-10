import { VideoHistory } from '../../utils/interfaces/types'
import { getDBConnection, insertVideoHistory } from '../../utils/storage/db';

const saveWatchHistory = async (video: VideoHistory, timestamp: number) => {
  const db = await getDBConnection();
  await insertVideoHistory(db, { ...video, lastWatchedTime: timestamp });
};

