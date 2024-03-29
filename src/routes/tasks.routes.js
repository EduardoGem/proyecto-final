import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask,
    registerPDC,
} from "../controllers/tasks.controller.js";

import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createTaskSchema } from "../schemas/task.schema.js";

import { regasigmatSchema } from "../schemas/asigmat.schema.js";

const router = Router()

router.get('/tasks', authRequired, getTasks); 
router.get('/tasks/:id', authRequired, getTask); 
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask); 

router.post('/registerpdc', validateSchema(regasigmatSchema), registerPDC );

router.delete('/tasks/:id', authRequired, deleteTask); 
router.put('/tasks/:id', authRequired, updateTask); 

export default router;