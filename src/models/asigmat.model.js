import mongoose from "mongoose";

const asigmatSchema = new mongoose.Schema({
    campo:{
        type:String,
        required: true,
        trim: true,
    },
    
    materia:{
        type:String,
        required: true,
        trim: true,
    },

    curso:{
        type:String,
        required: true,
        trim: true,
    },

    grado:{
        type:String,
        required: true,
        trim: true,
    },

    paralelo:{
        type:String,
        required: true,
        trim: true,
    },

},{

    timestamps:true 

})

export default mongoose.model("asigmat", asigmatSchema);  