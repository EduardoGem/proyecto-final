import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
import Jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';


import {} from 'dotenv/config'
import { default as twilio } from 'twilio';



//ejecutar tareas automaticamente============================================================
function tarea(){
    console.log(sendMessage(), new Date());
}

function lanzarSiempreALaHora(hora, minutos, tarea){
    var ahora = new Date();
    console.log('lanzado',ahora);
    var momento = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), hora, minutos);
    if(momento<=ahora){ // la hora era anterior a la hora actual, debo sumar un día
        momento = new Date(momento.getTime()+1000*60*60*24);
    }
    console.log('para ser ejecutado en',momento);
    setTimeout(function(){
        tarea();
        lanzarSiempreALaHora(hora,minutos,tarea);
    },momento.getTime()-ahora.getTime());
}

lanzarSiempreALaHora(0,55, tarea);
//aqui acaba la funcion=====================================================================



//funcion para enviar mensajes de watsapp====================================================
const accountSid = 'AC479c5c34e93ce34daf6898bf6c01452b';
const authToken = '948c9d69e4388f01efb510ac31ae1aa6';
const client = twilio(accountSid, authToken);

 async function sendMessage() {

    const mensaje = await client.messages.create({
        to: 'whatsapp:+59171598857',
        from: 'whatsapp:+14155238886',
        body: 'Hola Eduardo otra vez soy io'

    })
    console.log(mensaje.sid);
}
//Aqui acaba la funcion=======================================================================




export const register = async (req, res) => {

    const { email, password, username, a_paterno, a_materno, nombres, direccion, telefono, tipo_usuario, telefono_tutor, ci } = req.body;

    try {

        const userFound = await User.findOne({ email });
        if (userFound) return res.status(400).json(["el correo ya esta en uso"]);

        console.log(password);

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
            a_paterno,
            a_materno,
            nombres,
            direccion,
            telefono,
            tipo_usuario,
            telefono_tutor,
            ci,
        });


        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            a_paterno: userSaved.a_paterno,
            a_materno: userSaved.a_materno,
            nombres: userSaved.nombres,
            direccion: userSaved.direccion,
            telefono: userSaved.telefono,
            tipo_usuario: userSaved.tipo_usuario,
            telefono_tutor: userSaved.telefono_tutor,
            ci: userSaved.ci,

        })
    } catch (error) {
        res.status(500).json({ message: error.message });

    }

};


export const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json({ message: "User not found" });


        const isMatch = await bcrypt.compare(password, userFound.password);

        console.log(userFound.password);

        console.log(password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });


        const token = await createAccessToken({ id: userFound._id })
        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        })
    } catch (error) {
        res.status(500).json({ message: error.message });

    }

};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};




export const getUsers = async (req, res) => {
    try {
        const users = await User.find({ tipo_usuario: '4E' });
        if (!users) return res.status(404).json({ message: 'Sin usuarios registrados' });
        res.json(users);
    } catch (error) {
        return res.status(404).json({ message: "Sin usuarios registrados" });
    }
};




export const getDocentes = async (req, res) => {
    try {
        const users = await User.find({ tipo_usuario: '3D' });
        if (!users) return res.status(404).json({ message: 'Sin usuarios registrados' });
        res.json(users);
    } catch (error) {
        return res.status(404).json({ message: "Sin usuarios registrados" });
    }
};




export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if (!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })
};

export const verifyToken = async (req, res) => {
    const { token } = req.cookies
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    Jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });

        const userFound = await User.findById(user.id)
        if (!userFound) return res.status(401).json({ message: "Unauthorized" });

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            a_paterno: userFound.a_paterno,
            a_materno: userFound.a_materno,
            nombres: userFound.nombres,
            direccion: userFound.direccion,
            telefono: userFound.telefono,
            tipo_usuario: userFound.tipo_usuario,
            telefono_tutor: userFound.telefono_tutor,
            ci: userFound.ci,
        });
    });
};