import { Router } from "express"; 
import { asignarCD } from "../controllers/asignarcd.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js"; 
import { regasignarcdSchema } from "../schemas/asignarcd.schema.js";


const router = Router();

router.post('/asignardoc', validateSchema(regasignarcdSchema), asignarCD );

export default router 