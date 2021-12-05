import { Router } from 'express';
import { getTasks, createTask, getTask, deleteTask, updateTask, countTasks } from '../controllers/tasks';

const router = Router();

router.get('/all', getTasks);

router.get('/count', countTasks);

router.get('/:id', getTask);

router.post('/', createTask);

router.delete('/:id', deleteTask);

router.put('/:id', updateTask);

export default router;
