import { Router } from "express"; 
import { asignarCurso, getEstxC } from "../controllers/asigcur.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js"; 
import { regasigcurSchema } from "../schemas/asigcur.schema.js";



const router = Router();

router.post('/asignarce', validateSchema(regasigcurSchema), asignarCurso);

router.get('/listaes', getEstxC); 

export default router 