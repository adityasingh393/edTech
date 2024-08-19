
import SQLite from 'react-native-sqlite-storage';

export const db = SQLite.openDatabase(
  { name: 'Subscription.db', location: 'default' },
  () => console.log('Database opened'),
  (error) => console.error('Error opening database: ', error)
);

export const createTables = () => {
  db.transaction((txn) => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS plans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price REAL
      );`,
      [],
      () => {
        console.log('Plans table created');
        txn.executeSql('SELECT COUNT(*) as count FROM plans', [], (txn, results) => {
          const count = results.rows.item(0).count;
          if (count === 0) {
            txn.executeSql('INSERT INTO plans (name, price) VALUES (?, ?)', ['Monthly', 9.99]);
            txn.executeSql('INSERT INTO plans (name, price) VALUES (?, ?)', ['Annual', 99.99]);
          }
        });
      },
      (error) => console.error('Error creating plans table: ', error)
    );

    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uid TEXT UNIQUE,  
        email TEXT,
        name TEXT,
        subscribed_plan_id INTEGER,
        FOREIGN KEY(subscribed_plan_id) REFERENCES plans(id)
      );`,
      [],
      () => console.log('Users table created'),
      (error) => console.error('Error creating users table: ', error)
    );
  });
};
