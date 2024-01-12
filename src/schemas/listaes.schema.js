import { z } from 'zod';

export const createListaesSchema = z.object({
    fecha: z.string().datetime().optional(),
    estudiante: z.string({
        required_error:"campo is required",
    }),
    curso: z.string({
        required_error:"campo must be a string",
    }),
    paralelo: z.string({
        required_error:"campo is required",
    }),
    grado: z.string({
        required_error:"campo must be a string",
    }),
    asistencia: z.string({
        required_error:"campo is required",
    }),

});