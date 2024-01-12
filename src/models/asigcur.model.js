import mongoose from "mongoose";

const asigcurSchema = new mongoose.Schema({

    estudiante:{
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
    grado:{
        type:String,
        required:true,
        trim:true,
    }
},{
    timestamps:true,
})
export default mongoose.model("asigcur", asigcurSchema);  