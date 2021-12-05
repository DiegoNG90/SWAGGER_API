import lowdb, { LowdbSync } from 'lowdb';
// Vamos a usar la manera SINCRONA
import FileSync from 'lowdb/adapters/FileSync';
import { Schema } from './types';
/**
 * Este modulo puede usarse de manera síncrona y asíncrona
 */

let db: LowdbSync<Schema>;

export const createConnection = () => {
  const adapter = new FileSync<Schema>('db.json');
  db = lowdb(adapter);
  db.defaults({ tasks: [] }).write();
};

export const getConnection = () => {
  return db;
};
