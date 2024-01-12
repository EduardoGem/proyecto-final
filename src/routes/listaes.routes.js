import { Router } from "express"; 
import {listaEst} from "../controllers/listaes.controller.js"
import { validateSchema } from "../middlewares/validator.middlewares.js"; 
import { createListaesSchema } from "../schemas/listaes.schema.js";
// import { envwtsp } from "../controllers/auth.controller.js";


const router = Router();

router.post('/listaes', validateSchema(createListaesSchema), listaEst );

// router.get('/enviarsms', envwtsp)

export default router 