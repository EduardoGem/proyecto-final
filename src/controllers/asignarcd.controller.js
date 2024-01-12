import asignarcd from "../models/asignarcd.model.js"

export const asignarCD = async (req, res) =>{
   try {
       const {docente, curso, materia, paralelo} = req.body; 
   
       const newACD = new asignarcd({
           docente,
           curso,
           paralelo,
           materia,
       });
       const savedACD = await newACD.save();
       res.json(savedACD);
   } catch (error) {
       return res.status(500).json({message:"Something went wrong"});
   }
}