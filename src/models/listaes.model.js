import mongoose from "mongoose";

const listaesSchema = new mongoose.Schema({
    fecha:{
        type: Date,
        default: Date.now,
    },
    estudiante:{
        type: String,
        required: true,
    },
    curso:{
        type: String,
        required: true,
    },
    paralelo:{
        type: String,
        required: true,
    },
    grado:{
        type: String,
        required: true,
    },
    asistencia:{
        type: String,
        required:true
    }
},{
    timestamps: true
});

export default mongoose.model("listaes", listaesSchema);