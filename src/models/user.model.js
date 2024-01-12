import mongoose from "mongoose";


const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim:true,
    },
    a_paterno:{
        type: String,
        required: true,
        trim:true,
    },
    a_materno:{
        type: String,
        required:true,
        trim: true,
    },

    nombres:{
        type: String,
        required: true,
        trim: true,
    },
    direccion:{
        type:String,
        required: true,
        trim: true,
    },
    telefono:{
        type: String,
        required: true,
        trim: true, 
    },
    tipo_usuario:{
        type: String,
        required: true,
        trim: true,
    },
    telefono_tutor:{
        type:String,
        trim: true,
    },
    ci:{
        type: String,
        required:true,
        trim:true,
    },

},{
    timestamps:true
})

export default mongoose.model('User', userSchema)