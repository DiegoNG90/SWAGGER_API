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
 *          type: integer
 *          description: auto-generated id of the task
 *        title:
 *          type: string
 *          description: title of the task
 *        description:
 *           type: string
 *           description: description of the task
 *     required:
 *        - title
 *        - description
 *     example:
 *        id: G7RDurZJALB7rGEdWBxU8
 *        title: "Task 1"
 *        description: "This is the first task"
 *    TaskNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Message for the not found task
 *       example:
 *          msg: Task not found
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

/**
 * @swagger
 * /tasks:
 *   post:
 *     tags: [Tasks]
 *     summary: Creates a new task
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/Task'
 *     responses:
 *         200:
 *          description: Successfully created
 *          content:
 *            application/json:
 *             schema:
 *              $ref: '#/components/schemas/Task'
 *         500:
 *          description: Internal server error
 */
router.post('/', createTask);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *   summary: Returns a task by id
 *   tags: [Tasks]
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *        type: string
 *       description: id of the task
 *   responses:
 *    200:
 *      description: Successfully retrieved
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    204:
 *      description: No content
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TaskNotFound'
 *
 *    500:
 *      description: Internal server error
 */

router.get('/:id', getTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *    summary: Deletes a task by id
 *    tags: [Tasks]
 *    parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *        type: string
 *       description: id of the task
 *    responses:
 *     200:
 *        description: Successfully deleted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *     204:
 *      description: No content
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TaskNotFound'
 *     500:
 *       description: Internal server error
 */
router.delete('/:id', deleteTask);

router.put('/:id', updateTask);

export default router;
