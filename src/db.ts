import lowdb, { LowdbSync } from 'lowdb';
// Vamos a usar la manera SINCRONA
import FileSync from 'lowdb/adapters/FileSync';
/**
 * Este modulo puede usarse de manera síncrona y asíncrona
 */

export type Task = {
  id: string;
  title: string;
  description: string;
};
type Schema = {
  tasks: Array<Task>;
};

let db: LowdbSync<Schema>;

export const createConnection = () => {
  const adapter = new FileSync<Schema>('db.json');
  db = lowdb(adapter);
  db.defaults({ tasks: [] }).write();
};

export const getConnection = () => {
  return db;
};
