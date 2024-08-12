import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';
import { Watchlist } from '../interfaces/types';

SQLite.enablePromise(true);

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  return SQLite.openDatabase({ name: 'watchlist.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase): Promise<void> => {
  const query = `
    CREATE TABLE IF NOT EXISTS watchlist (
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

  try {
    await db.executeSql(query);
    console.log('Table watchlist created successfully');
  } catch (error) {
    console.error('Error creating watchlist table:', error);
  }
};

export const insertWatchlist = async (
  db: SQLiteDatabase,
  video: Watchlist
): Promise<void> => {
  const insertQuery = `
    INSERT OR REPLACE INTO watchlist (id, title, thumbnailUrl, duration, uploadTime, views, author, videoUrl, description, subscriber, lastWatchedTime) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  try {
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
    console.log('Video inserted successfully');
  } catch (error) {
    console.error('Error inserting video into watchlist:', error);
  }
};


export const getWatchlist = async (
  db: SQLiteDatabase
): Promise<Watchlist[]> => {
  const watchlist: Watchlist[] = [];
  try {
    const results = await db.executeSql('SELECT * FROM watchlist ORDER BY lastWatchedTime DESC;');
    results.forEach((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        watchlist.push(result.rows.item(i));
      }
    });
    console.log('Fetched watchlist:', watchlist);
  } catch (error) {
    console.error('Error fetching watchlist:', error);
  }
  return watchlist;
};
