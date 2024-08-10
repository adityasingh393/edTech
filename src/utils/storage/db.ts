import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';
import { VideoHistory } from '../interfaces/types';

SQLite.enablePromise(true);

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  return SQLite.openDatabase({ name: 'videoHistory.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase): Promise<void> => {
  const query = `
    CREATE TABLE IF NOT EXISTS video_history (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      thumbnailUrl TEXT,
      duration TEXT,
      uploadTime TEXT,
      views TEXT,
      author TEXT,
      videoUrl TEXT,
      description TEXT,
      subscriber TEXT,
      lastWatchedTime REAL NOT NULL
    );`;

  await db.executeSql(query);
};

export const insertVideoHistory = async (
  db: SQLiteDatabase,
  video: VideoHistory
): Promise<void> => {
  const insertQuery = `
    INSERT OR REPLACE INTO video_history (id, title, thumbnailUrl, duration, uploadTime, views, author, videoUrl, description, subscriber, lastWatchedTime) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  await db.executeSql(insertQuery, [
    video.id,
    video.title,
    video.thumbnailUrl,
    video.duration,
    video.uploadTime,
    video.views,
    video.author,
    video.videoUrl,
    video.description,
    video.subscriber,
    video.lastWatchedTime,
  ]);
};

export const getVideoHistory = async (
  db: SQLiteDatabase
): Promise<VideoHistory[]> => {
  const history: VideoHistory[] = [];
  const results = await db.executeSql('SELECT * FROM video_history ORDER BY lastWatchedTime DESC;');
  results.forEach((result) => {
    for (let i = 0; i < result.rows.length; i++) {
      history.push(result.rows.item(i));
    }
  });
  return history;
};
