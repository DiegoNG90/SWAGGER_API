import { Router } from 'express';
import { getTasks, createTask } from '../controllers/tasks';

const router = Router();

router.get('/all', getTasks);

router.get('/count', (req, res) => {
  res.send('TASKSS');
});

router.get('/:id', (req, res) => {
  res.send('TASKSS');
});

router.post('/', createTask);

router.delete('/:id', (req, res) => {
  res.send('TASKSS');
});

router.put('/:id', (req, res) => {
  res.send('TASKSS');
});

export default router;
