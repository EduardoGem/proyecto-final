import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SidebarFinal from "../components/SidebarFinal";
import HeaderPrin from "../components/HeaderPrin";



function RegisterPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm(); 
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated]);

    

    const onSubmit = handleSubmit(async (values) => {
        signup(values);

    }); 


    return (
        <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
            <div className="col-span-1">
                <SidebarFinal />
            </div>
            <div className=" bg-zinc-200 col-span-5">
                <HeaderPrin />
                <div className="flex justify-center py-16 ">
                    <div className=" bg-slate-300 h-[700px] w-[1200px] rounded-md ">

                        {
                            RegisterErrors.map((error, i) => (
                                <div className="bg-red-500 p-2 text-white" key={i}>
                                    {error}
                                </div>

                            ))
                        }
                        <h1 className="font-semibold bg-emerald-700 text-2xl  font-sans text-slate-200 p-6 rounded-md">FORMULARIO DE REGISTRO</h1>
                        <form
                            onSubmit={onSubmit}
                            className="p-14 flex flex-wrap"
                        >
                            <div className=" w-full flex justify-between p-8">
                                <div>
                                    <label className=" font-sans p-2 text-gray-700">Apellido Paterno:</label>
                                    <input type="text" {...register("a_paterno", { required: true })} className="mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md " />
                                </div>
                                <div>
                                    <label className=" font-sans p-2 text-gray-700 ">Apellido Materno:</label>
                                    <input type="text" {...register("a_materno", { required: true })} className=" mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                                </div>
                            </div>
                            <div className=" w-full flex justify-between p-8">
                                <label className=" font-sans p-2 text-gray-700 ">Nombres:</label>
                                <input type="text" {...register("nombres", { required: true })} className="  mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                                <label className=" font-sans p-2 text-gray-700 ">Dirección:</label>
                                <input type="text" {...register("direccion", { required: true })} className=" mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                                <label className=" font-sans p-2 text-gray-700 ">Telefono:</label>
                                <input type="tel" {...register("telefono", { required: true })} className=" mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                            </div>
                            <div className=" w-full flex justify-between p-8">
                                <div>
                                    <label className="font-sans p-2 text-gray-700">Usuario:</label>
                                    <input type="text" {...register("username", { required: true })}
                                        className="mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md"
                                        placeholder="Usuario"
                                    />
                                    {errors.username && (
                                        <p className="text-red-500">El nombre es requerido</p>
                                    )}
                                </div>
                                <div>
                                    <label className="ffont-sans p-2 text-gray-700">Tipo de Usuario:</label>
                                    <select {...register("tipo_usuario", { required: true })} className="mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md font-sans">
                                        <option value={"none"}>
                                            None
                                        </option>
                                        <option value={"1A"}>
                                            Administrador
                                        </option>
                                        <option value={"2PA"}>
                                            Plantel Administrativo
                                        </option>
                                        <option value={"3D"}>
                                            Docente
                                        </option>
                                        <option value={"4E"}>
                                            Estudiante
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className=" w-full flex justify-between p-8">

                                <label className="font-sans p-2 text-gray-700">Correo:</label>
                                <input type="email" {...register("email", { required: true })}
                                    className=" mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md"
                                    placeholder="Email"
                                />
                                {errors.email && (
                                    <p className="text-red-500">se requiere de un email</p>
                                )}
                                <label className="font-sans p-2 text-gray-700">Contraseña:</label>
                                <input type="password" {...register("password", { required: true })}
                                    className=" mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md"
                                    placeholder="Contraseña"
                                />
                                {errors.password && (
                                    <p className="text-red-500">Contraseña requerida</p>
                                )}
                                <label htmlFor='date' className="font-sans p-2 text-gray-700">CI:</label>
                                <input type="text" {...register("ci", { required: true })} className="mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                            </div>
                            <div className=" w-full flex justify-between px-8 py-12">
                                <div>
                                    <label className=" font-sans p-2 text-gray-700 ">Telefono Tutor:</label>
                                    <input type="tel" {...register("telefono_tutor", { required: true })} className=" mx-4 w-[250px]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                                </div>

                                <div>
                                    <button type="submit"
                                        className=" bg-[#198754] mx-2 w-[100px]  text-white px-4 py-2 rounded-lg  font-sans"
                                    >Registrar</button>
                                    <button
                                        className=" bg-[#dc3545] mx-2 w-[100px]   text-white px-4 py-2 rounded-lg  font-sans"
                                    >Salir</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RegisterPage