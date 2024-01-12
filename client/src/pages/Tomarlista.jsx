import SidebarFinal from "../components/SidebarFinal";
import HeaderPrin from "../components/HeaderPrin";
import AsyncSelect from 'react-select/async';
import Select from "react-select";
import { useTLista } from "../context/tomarlistaContext";


import DataTable from 'react-data-table-component';


import { useState } from "react";
import { Formik } from 'Formik';

const optasis = [
    { value: "1", label: "ASITENTE" },
    { value: "2", label: "RETARDO" },
    { value: "3", label: "FALTA" },
]


const estilomenu = {
    control: (styles) => {
        return {
            ...styles,
            borderColor: "#71717a", 
            width: '200px'
        }
    },
}
const optcursos = [
    { value: [{ curso: "primero", paralelo: "A", grado: "secundaria" }], label: "PRIMERO A" },
    { value: [{ curso: "segundo", paralelo: "C", grado: "primaria" }], label: "SEGUNDO C" },
    { value: [{ curso: "tercero", paralelo: "C", grado: "secundaria" }], label: "TERCERO C" },
    { value: [{ curso: "quinto", paralelo: "B", grado: "secundaria" }], label: "QUINTO B" },
    { value: [{ curso: "quinto", paralelo: "C", grado: "secundaria" }], label: "QUINTO C" },
    { value: [{ curso: "sexto", paralelo: "B", grado: "secundaria" }], label: "SEXTO B" },
]



const estilos = {
    control: (styles) => {
        return {
            ...styles,
            backgroundColor: "#e2e8f0",
            borderColor: "#71717a",
        }
    },
    option: (styles) => {
        return {
            ...styles,
            backgroundColor: "#e2e8f0",
        }
    },
}



const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            background: '#f1f5f9',
        },
    },
    headCells: {
        style: {
            paddingLeft: '160px',
            paddingRight: '160px',
            background: '#18181b',
            color: 'white',

        },
    },
    cells: {
        style: {
            paddingLeft: '100px', // override the cell padding for data cells
            paddingRight: '100px',


        },

    },

};

function Tomarlista() {

    const columns = [
        {
            name: 'ESTUDIANTE',
            selector: row => row.estudiante
        },
        {
            name: 'ASISTENCIA',
            selector: row => row.asistencia,
            button: true,
            cell: () => <Button>AsistenciaEst</Button>,

            style: {
                paddingRight: '150px',
                paddingLeft: '200px',
            },
        },
    ]

    const Button = () => <Select
        placeholder="Elegir opcion..."
        options={optasis}
        styles={estilomenu}
        onChange={onchangeSel}
    />;

    const [valueSel, setValueSel] = useState([]);

    const onchangeSel = (valueC) => {
        setValueSel(valueC.value);
        console.log(valueC.value)
    }



    const [valueli, setValue] = useState();


    const { getEstxCGP, TomarListaEs } = useTLista();


    const mostrarCursos = async () => {
        const res = await getEstxCGP()
        setValue(res);
        console.log(res)
    }




    const enviarDBD = async () => {
        const res = valueli[0];
        const res1 = { asistencia: valueSel };
        const result = ({ estudiante: res.estudiante, curso: res.curso, paralelo: res.paralelo, grado: res.grado, asistencia: res1.asistencia })
        console.log(result)
        const bres = await TomarListaEs(result);
        console.log(bres)
    }



    return (
        <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
            <div className="col-span-1">
                <SidebarFinal />
            </div>
            <div className=" bg-zinc-200 col-span-5 ">
                <HeaderPrin />
                <h1 className="p-8 text-4xl font-bold text-gray-800 font-sans">TOMAR LISTA ESTUDIANTES</h1>
                <div className=" flex justify-center py-10">
                    <div className="w-[1000px] h-[586px]">
                        <div className="h-[7%] flex justify-between bg-zinc-200">
                            <div>
                                <input type="date" className=" font-bold w-[200px] h-[40px] rounded-sm outline-zinc-800 border-slate-400 border-2 bg-slate-200" />
                            </div>

                            <div className="flex">
                                <div className=" flex items-center mx-1 px-2 bg-amber-400 h-[37px] rounded-sm font-bold font-sans text-white ">
                                    <button onClick={enviarDBD}>REGISTRAR</button>
                                </div>
                                <div className=" bg-emerald-600 h-[37px] mr-1 rounded-sm flex items-center">
                                    <label className=" p-4 text-white text-center font-bold ">SECUNDARIA</label>
                                </div>
                                <div className=" w-[200px] h-[40px] font-bold">
                                    <Select
                                        placeholder="Elegir curso..."
                                        styles={estilos}
                                        options={optcursos}
                                        onChange={mostrarCursos}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-[93%] border-2 border-zinc-500 bg-slate-100" >
                            <DataTable
                                columns={columns}
                                data={valueli}
                                customStyles={customStyles}
                                pagination
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tomarlista