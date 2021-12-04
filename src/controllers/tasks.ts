import { Handler } from 'express';

export const getTasks: Handler = (req, res) => {
  res.send('All tasks');
};
