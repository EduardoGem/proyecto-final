import mongoose from "mongoose";

const asignarcdSchema = new mongoose.Schema({ 

    docente:{
        type: String,
        required:true, 
        trim:true,
    },
    curso:{
        type:String,
        required:true,
        trim:true,
    },
    paralelo:{
        type:String,
        required:true,
        trim:true,
    },
        materia:{
        type:String,
        required:true,
        trim:true,
    },

},{
    timestamps:true,
})
export default mongoose.model("asignarcd", asignarcdSchema);  