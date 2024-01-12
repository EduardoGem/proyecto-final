import listaes from '../models/listaes.model.js'

export const listaEst = async (req, res) => {
    try {
        const {  estudiante, curso, paralelo, grado, asistencia } = req.body;

        const newListaes = new listaes({
            
            estudiante,
            curso,
            paralelo,
            grado,
            asistencia,
        });
        const savedListaes = await newListaes.save();
        res.json(savedListaes);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" }); 
    }
}