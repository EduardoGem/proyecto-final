import SidebarFinal from "../components/SidebarFinal";
import HeaderPrin from "../components/HeaderPrin";
import AsyncSelect from 'react-select/async';
import Select from "react-select";
import { useAuth } from "../context/AuthContext";
import { useAsignarCD } from "../context/asignarcdContext";
import { useState } from "react";
import { Formik } from 'Formik'; 

const optcursos = [
    { value: "primero", label: "PRIMERO" }, 
    { value: "segundo", label: "SEGUNDO" },
    { value: "tercero", label: "TERCERO" },
    { value: "cuarto", label: "CUARTO" },
    { value: "quinto", label: "QUINTO" },
    { value: "sexto", label: "SEXTO" },
]

const optmaterias = [
    {value:"Comunicacion y lengaujes", label:"COMUNICACION Y LENGAUJES"},
    {value:"Lengua Extrangera", label:"LENGUA EXTRANGERA"},
    {value:"Ciencias Sociales", label:"CIENCIAS SOCIALES"},
    {value:"Educacion Fisica y Deportes", label:"EDUCACIÓN FÍSICA Y DEPORTES"},
    {value:"Educacion Musical", label:"EDUCACIÓN MUSICAL"},
    {value:"Artes Plasticas y Visuales", label:"ARTES PLASTICAS Y VISUALES"},
    {value:"Matematicas", label:"MATEMATICAS"},
    {value:"Biologia-Geografia", label:"BIOLOGIA - GEOGRAFIA"},
    {value:"Fisica", label:"FISICA"},
    {value:"Quimica", label:"QUIMICA"},
    {value:"Filosofia-Psicologia", label:"FILOSOFIA-PSICOLOGIA"},
    {value:"Valores espiritualidad y religiones", label:"VALORES-ESPIRITUALIDAD"},
    {value:"Tecnica Tecnologica", label:"TECNICA TECNOLOGICA"},
]


const estilos = {
    control: (styles) => {
        return {
            ...styles,
            backgroundColor: "#e5e7eb",
            borderColor: "none",
        }
    },
    option: (styles) => {
        return {
            ...styles,
            backgroundColor: "#e5e7eb",
        }
    },
}


function AsignarCD() {
    const { createAsignarCD } = useAsignarCD();
    const { getDocente } = useAuth();
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false); 
    const [valueDoc, setValue] = useState();
    const [valueMateria, setValueG] = useState();
    const [valueCurso, setValueC] = useState();


    const onchangeDoc = ({ label }) => {
        setValue(label);
        console.log(label);
    }

    const onchangeMat = (value) => {
        setValueG(value.value);
        console.log(value.value);
    }
    
    const onchangeCur = (valueC) => {
        setValueC(valueC.value)

        console.log(valueC.value)
    }


    const userselect = async (searchValue, callback) => {

        const res = await getDocente();
        const resfinal = res.map((usersel) => ({ label: usersel.nombres + " " + usersel.a_paterno + " " + usersel.a_materno, value: usersel.ci, }))
        const filteroptions = resfinal.filter(option => option.value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        callback(filteroptions);

    }

    return (

        <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
            <div className="col-span-1">
                <SidebarFinal />
            </div>
            <div className=" bg-zinc-200 col-span-5">
                <HeaderPrin />
                <div className=" flex justify-center py-16">
                    <div className=" bg-slate-300  w-[600px] h-[600px] rounded-md">
                        <h1 className=" bg-emerald-700 text-3xl text-center font-sans  text-slate-200 p-6 rounded-t-md">ASIGNAR CURSO A DOCENTE</h1>
                        <Formik
                            initialValues={{
                                docente: " ",
                                materia: " ",
                                curso: " ",
                                paralelo: " ",
                            }}
                            onSubmit={(valores, { resetForm }) => {
                                console.log(valores);
                                createAsignarCD(valores);
                                resetForm();
                                console.log("Formulario enviado...");
                                cambiarFormularioEnviado(true);
                                setTimeout(() => cambiarFormularioEnviado(false), 3000);
                            }}
                        >
                            {({ values, handleSubmit, handleChange }) => (
                                <form id="formulario" className=" p-20" onSubmit={handleSubmit}>
                                    <div className=" flex justify-between w-full p-4">
                                        <label htmlFor="docente" className="w-[30%]  justify-center text-xl font-sans  flex items-center ">Docente:</label>
                                        <div className=" w-[70%] text-black">
                                            <AsyncSelect

                                                placeholder="CI DOCENTE"
                                                closeMenuOnSelect={true}
                                                styles={estilos}
                                                loadOptions={userselect}
                                                onChange={onchangeDoc}
                                                const val = {values.docente = (valueDoc)}

                                            />
                                        </div>
                                    </div>
                                    <div className=" flex justify-between w-full p-4">
                                        <label htmlFor="materia" className="w-[30%]  justify-center text-xl font-sans flex items-center ">Materia:</label>

                                        <div className=" font-sans w-[70%] text-black  ">
                                            <Select

                                                id="materia"
                                                name="materia"
                                                placeholder="NONE"
                                                styles={estilos}
                                                closeMenuOnSelect={true}
                                                options={optmaterias}
                                                onChange={onchangeMat}
                                                const val = {values.materia = (valueMateria)}

                                            />
                                        </div>
                                    </div>
                                    <div className=" flex justify-between w-full p-4">
                                        <label htmlFor="curso" className="w-[30%]  justify-center text-xl font-sans flex items-center ">Curso:</label>

                                        <div className=" font-sans w-[70%] text-black">

                                            <Select

                                                name="curso"
                                                styles={estilos}
                                                placeholder="NONE"
                                                closeMenuOnSelect={true}
                                                options={optcursos}
                                                onChange={onchangeCur}
                                                const val = {values.curso = (valueCurso)}

                                            />

                                        </div>
                                    </div>
                                    <div className=" flex justify-between w-full px-4 py-2">
                                        <label htmlFor="paralelo" className="w-[30%]  justify-center text-xl font-sans flex items-center ">Paralelo:</label>
                                        <input onChange={handleChange} value={values.paralelo} id="paralelo" name="paralelo" type="text" placeholder="PARALELO" className=" font-sans w-[70%]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
                                    </div>
                                    <div className="flex justify-end w-full py-10 px-4">
                                        <button type="submit" className=" w-[200px] bg-[#198754]  text-white px-3 py-2 rounded-lg text-xl  font-sans">
                                            Guardar
                                        </button>
                                    </div>
                                    {formularioEnviado &&<p className=" text-xl text-center text-amber-600">Formulario enviado con exito!</p>}
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsignarCD