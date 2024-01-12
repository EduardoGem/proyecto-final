import { z } from "zod";

export const regasigmatSchema = z.object({
    campo: z.string({
        required_error: 'Este campo es requerido',
    }),

    materia: z.string({
        required_error: 'Este campo es requerido',
    }),

    curso: z.string({
        required_error: 'Este campo es requerido',
    }),

    grado: z.string({
        required_error: 'Este campo es requerido',
    }),

    paralelo: z.string({
        required_error: 'Este campo es requerido', 
    }),
});