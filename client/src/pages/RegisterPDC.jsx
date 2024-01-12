import SidebarFinal from "../components/SidebarFinal" 
import HeaderPrin from "../components/HeaderPrin"
import { useForm } from "react-hook-form"
import { useRM } from "../context/regmatContext";
import { useNavigate } from "react-router-dom";






function RegisterPDC() { 



    const{register, handleSubmit} = useForm();
    const {createRegmat} = useRM();



    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        createRegmat(values);
        formulario.reset();
    }); 


    return (
        <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
            <div className="col-span-1">
                <SidebarFinal />
            </div>
            <div className=" bg-zinc-200 col-span-5">
                <HeaderPrin />
                <div className=" flex justify-center py-16">
                    <div className=" bg-slate-300  w-[600px] h-[700px] rounded-md">
                        <h1 className=" bg-emerald-700 text-3xl text-center font-sans font-semibold text-slate-200 p-6 rounded-t-md">REGISTRO DE MATERIAS</h1>
                        <form id="formulario" className=" p-20" onSubmit={onSubmit}>
                            <div className=" flex justify-between w-full p-4">
                                <label className="w-[30%]  justify-center text-xl font-sans flex items-center ">Campo:</label>
                                <input type="text" {...register("campo", { required: true })} placeholder="Campo" className="font-sans w-[70%]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                            </div>
                            <div className=" flex justify-between w-full p-4">
                                <label className="w-[30%]  justify-center text-xl font-sans flex items-center "  >Materia:</label>
                                <input type="text" {...register("materia", { required: true })} placeholder="Materia" className="font-sans w-[70%]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                            </div>
                            <div className=" flex justify-between w-full p-4">
                                <label className="w-[30%]  justify-center text-xl font-sans flex items-center ">Curso:</label>
                                <select {...register("curso", { required: true })} className=" font-sans w-[70%]  p-2 bg-gray-200 outline-slate-400 rounded-md">
                                    <option disabled selected>NONE</option>
                                    <option value={"PRIMERO"}>PRIMERO</option>
                                    <option value={"SEGUNDO"}>SEGUNDO</option>
                                    <option value={"TERCERO"}>TERCERO</option>
                                    <option value={"CUARTO"}>CUARTO</option>
                                    <option value={"QUINTO"}>QUINTO</option>
                                    <option value={"SEXTO"}>SEXTO</option>
                                </select>
                            </div>
                            <div className=" flex justify-between w-full p-4">
                                <label className="w-[30%]  justify-center text-xl font-sans flex items-center ">Grado:</label>
                                <select {...register("grado", { required: true })} className=" font-sans w-[70%]  p-2 bg-gray-200 outline-slate-400 rounded-md">
                                    <option disabled selected>NONE</option>
                                    <option value={"PRIMARIA"}>PRIMARIA</option>
                                    <option value={"SECUNDARIA"}>SECUNDARIA</option>
                                </select>
                            </div>
                            <div className=" flex justify-between w-full p-4">
                                <label  className="w-[30%]  justify-center text-xl font-sans flex items-center ">Paralelo:</label>
                                <input type="text" {...register("paralelo", { required: true })} placeholder="Paralelo" className=" font-sans w-[70%]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                            </div>
                            <div className="flex justify-end w-full py-10 px-4">
                                <button className=" w-[200px] bg-[#198754]  text-white px-4 py-2 rounded-lg text-xl  font-sans">
                                    Guardar
                                </button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegisterPDC