import SQLite from 'react-native-sqlite-storage';

class DatabaseHelper {
  constructor(databaseName = 'mydatabase.db') {
    this.db = SQLite.openDatabase(
      { name: databaseName, location: 'default' },
      () => {},
      error => {
        console.error('Error opening database:', error);
      }
    );
  }

  createTable() {
    this.db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS guests (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)',
        [],
        (_, resultSet) => {
          console.log('Table created successfully');
        },
        (_, error) => {
          console.error('Error creating table:', error);
        }
      );
    });
  }

  insertGuest(name, email) {
    this.db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO guests (name, email) VALUES (?, ?)',
        [name, email],
        (_, resultSet) => {
          console.log('Guest inserted successfully');
        },
        (_, error) => {
          console.error('Error inserting guest:', error);
        }
      );
    });
  }

  getGuests(callback) {
    this.db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM guests',
        [],
        (_, resultSet) => {
          const guests = resultSet.rows.raw();
          callback(guests);
        },
        (_, error) => {
          console.error('Error getting guests:', error);
        }
      );
    });
  }
}

export default DatabaseHelper;
