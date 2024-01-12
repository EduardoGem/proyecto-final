import { z } from 'zod'; 

export const regasigcurSchema = z.object({
    estudiante: z.string({
        required_error:"el campo es requerido",
    }),
    grado: z.string({
        required_error:"Title is required",
    }),
    curso: z.string({
        required_error:"Title is required",
    }),
    paralelo: z.string({
        required_error:"Title is required", 
    }),
});