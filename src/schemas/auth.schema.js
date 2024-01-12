import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Este campo es requerido',
    }),
    email: z.string({
        required_error:'Este campo es requerido',
    }).email({
        message:'email invalido',
    }),
    password: z.string({
        required_error:'Este campo es requerido',
    }).min(6,{
        message:"Password must be at least 6 characters",
    }),
    a_paterno: z.string({
        required_error:'Este campo es requerido',
    }),
    a_materno: z.string({
        required_error:'Este campo es requerido',
    }),
    nombres: z.string({
        required_error:'Este campo es requerido', 
    }),
    direccion: z.string({
        required_error:'Este campo es requerido',
    }),
    telefono: z.string({
        required_error:'Este campo es requerido',
    }),
    tipo_usuario: z.string({
        required_error:'Este campo es requerido',
    }),
    telefono_tutor: z.string({
        required_error:'Este campo es requerido',
    }),
    ci:z.string({
        required_error:'Este campo es requerido',
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error:'Email is required',
    }).email({
        message:"Invalid email",
    }),
    password: z.string({
        required_error:"Password is required",
    }).min(6, {
        message:"Password must be at least 6 characters",
    })
})