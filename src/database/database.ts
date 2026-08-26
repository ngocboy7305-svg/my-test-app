import * as SQLite from 'expo-sqlite';

const db = 'personal-mamager.db';

export const dbPromise = SQLite.openDatabaseAsync(db);

export async function initDatabase() {
    const db = await dbPromise;

    return db.execAsync(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            priority TEXT,
            completed BOOLEAN NOT NULL,
            deadline TEXT,
            createAt TEXT NOT NULL
        )
    `);
}