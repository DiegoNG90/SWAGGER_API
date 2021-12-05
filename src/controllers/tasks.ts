import { Handler } from 'express';
import { getConnection } from '../db';
import { nanoid } from 'nanoid';
import { Task } from '../db';
export const getTasks: Handler = (req, res) => {
  try {
    const tasks = getConnection().get('tasks').value();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong'
    });
  }
};

export const createTask: Handler = (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask: Task = {
      title,
      description,
      id: nanoid()
    };
    const postTask = getConnection().get('tasks').push(newTask).write();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong'
    });
  }
};
