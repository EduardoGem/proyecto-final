import asigcur from '../models/asigcur.model.js'

export const asignarCurso = async (req, res) => {
    try {
        const { estudiante, grado, curso, paralelo } = req.body;

        const newACE = new asigcur({
            estudiante,
            grado,
            curso,
            paralelo,
        });
        const savedACE = await newACE.save();
        res.json(savedACE);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" }); 
    }
} 

export const getEstxC = async (req, res) => {
    try {
        const student = await asigcur.find();
        if (!student) return res.status(404).json({ message: "Error...  Sin estudiantes inscritos" });
        res.json(student);
    } catch (error) {
        return res.status(404).json({ message: "Error...  Sin estudiantes inscritos" });
    }
}