import { z } from 'zod'; 

export const regasignarcdSchema = z.object({
    docente: z.string({
        required_error:"el campo es requerido",
    }),
    curso: z.string({
        required_error:"curso is required",
    }),
    paralelo: z.string({
        required_error:"paralelo is required",
    }),
    materia: z.string({
        required_error:"materia is required", 
    }),
});