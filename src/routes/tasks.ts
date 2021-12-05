import { Router } from 'express';
import { getTasks, createTask, getTask, deleteTask, updateTask, countTasks } from '../controllers/tasks';

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *     type: object
 *     properties:
 *        id:
 *          type: number
 *          description: id of the task
 *        title:
 *          type: string
 *          description: title of the task
 *        description:
 *            type: string
 *            description: description of the task
 *     required:
 *        -title
 *        -description
 *     example:
 *        id: G7RDurZJALB7rGEdWBxU8
 *        title: "Task 1"
 *        description: "This is the first task"
 *
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Tasks management
 */

/**
 * @swagger
 * /tasks/all:
 *  get:
 *    tags: [Tasks]
 *    summary: Returns an array of all tasks
 *    responses:
 *      200:
 *        description: An array of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
router.get('/all', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    tags: [Tasks]
 *    summary: Returns the total number of tasks
 *    responses:
 *      200:
 *       description: The total number of tasks
 */

router.get('/count', countTasks);

router.get('/:id', getTask);

router.post('/', createTask);

router.delete('/:id', deleteTask);

router.put('/:id', updateTask);

export default router;
